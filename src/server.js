// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51NCoQdGgGPXWWCh5QtVuLmTp9w795uuEd1dXDHFgFCKh2DnIRYgs2RL16fERTPO9lN2gSP2jMHQw9yP2zfyp74vq00mMhVrcN0');

const customer = await stripe.customers.create({
  email: '{{CUSTOMER_EMAIL}}',
  name: '{{CUSTOMER_NAME}}',
});
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51NCoQdGgGPXWWCh5QtVuLmTp9w795uuEd1dXDHFgFCKh2DnIRYgs2RL16fERTPO9lN2gSP2jMHQw9yP2zfyp74vq00mMhVrcN0');

const account = await stripe.accounts.create({
  country: 'US',
  type: 'custom',
  capabilities: {
    card_payments: {
      requested: true,
    },
    transfers: {
      requested: true,
    },
  },
});
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51NCoQdGgGPXWWCh5QtVuLmTp9w795uuEd1dXDHFgFCKh2DnIRYgs2RL16fERTPO9lN2gSP2jMHQw9yP2zfyp74vq00mMhVrcN0');

const session = await stripe.financialConnections.sessions.create({
  account_holder: {
    type: 'customer',
    customer: '{{CUSTOMER_ID}}',
  },
  permissions: ['balances', 'ownership', 'payment_method', 'transactions'],
});