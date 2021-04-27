import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJS() {
  const stripeJS = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
}
