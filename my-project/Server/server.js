import express from "express";
import stripePackage from "stripe";
import bodyParser from "body-parser";
import cors from "cors";

const stripe = stripePackage(
  "sk_test_51OLrJiSI60hfPP34tl3ceAHDDoTqLYrHsE6dwblkPrcYacCPESOymLNeYaYq5bjDSjwFw8NLQ5rb8BeRbPbSBK6C00oOuV10bx"
);

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/pay", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });

    // Handle the charge response
    if (charge.status === "succeeded") {
      // Payment successful
      const paymentAmount = charge.amount / 100; // Convert amount to dollars
      res.json({
        status: "success",
        message: "Payment successful",
        amount: paymentAmount,
      });
    } else {
      // Payment failed
      res.status(500).json({ status: "error", message: "Payment failed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
