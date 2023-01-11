import {loadStripe} from '@stripe/stripe-js'

export const stripeElemt = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY)