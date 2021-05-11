import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJS() {
  const stripeJS = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJS;
}

/**
 * This Stripe setup is done for Stripe to communicate with the API Routes
 * using the public key
 **/
