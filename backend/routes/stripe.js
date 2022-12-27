// const router = require('express').Router();
// const stripe = require('stripe')(
//   'sk_test_51MBLk0A7eieQVs7j9RctHpX6Gp5wy8JaVfQ2JegqRDXgLajzlyCJ2BMdNX7HBm5y4IdFFqalAEKPFwl4MKKjZh3q00M6i1Rbiq'
// );

// router.post('/payment', (req, res) => {
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: 'usd',
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

// module.exports = router;

////NEW/////

import express from "express";
import Stripe from "stripe";
const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
// import stripe from "stripe";
const stripe = Stripe(
  "sk_test_51MBLk0A7eieQVs7j9RctHpX6Gp5wy8JaVfQ2JegqRDXgLajzlyCJ2BMdNX7HBm5y4IdFFqalAEKPFwl4MKKjZh3q00M6i1Rbiq"
);
// const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  console.log(req.body);
  const result = await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
  // if (result) {
  //   res.status(200).json("Done...");
  // }
});

export default router;
