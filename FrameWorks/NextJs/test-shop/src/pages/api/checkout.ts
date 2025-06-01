import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const NEXT_URL = process.env.NEXT_URL;

  const priceId = JSON.parse(req.body).priceId;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${NEXT_URL}/cancel`,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
