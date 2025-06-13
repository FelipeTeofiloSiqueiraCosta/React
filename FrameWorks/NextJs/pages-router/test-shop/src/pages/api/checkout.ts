import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const NEXT_URL = process.env.NEXT_URL;

  const { lineItems } = req.body;

  if (!lineItems || lineItems.length === 0) {
    return res.status(400).json({ error: "No Items in the cart" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${NEXT_URL}/cancel`,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
