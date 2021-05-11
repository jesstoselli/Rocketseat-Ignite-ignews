import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version,
  },
});

/**
 * This Stripe setup is done for Stripe to communicate with the API Routes
 * using the private key
 **/
