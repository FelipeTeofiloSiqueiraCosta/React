import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-04-30.basil",
  // App information
  // I'm writing the name of the app because the logs in the stripe dashboard will show the name of the app
  appInfo: {
    name: "Test Shop",
  },
});
