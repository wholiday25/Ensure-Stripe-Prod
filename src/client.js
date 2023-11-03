const stripe = new Stripe('pk_test_51NCoQdGgGPXWWCh5JdNCSBJbLfDuITFqvz2t8MKkZH2F5T2W0XTTNnFX0lPcWxgQXEgFKrTgF4Ro7ONFhuG8QpfR00gzirchB9')
const financialConnectionsSessionResult = await stripe.collectFinancialConnectionsAccounts({ clientSecret: "fcsess_client_secret_UsESkKYzeiRcivgDJZfxZRFh" });
