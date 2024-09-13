const { Cashfree } = require("cashfree-pg");
// const crypto = require("crypto");
require('dotenv').config();
const crypto = require("crypto");
// Cashfree.XClientId = "TEST103063739f301c978a691cc40b6437360301";
// Cashfree.XClientSecret =
//   "cfsk_ma_test_9ca8a623cbb60493eb84deced75e11c6_0ed92a3a";

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret =process.env.CASHFREE_SECRET_KEY;

Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);
  const orderId = hash.digest("hex");
  return orderId.substr(0, 12);
}


const handlePayment = async (req, res) => {
  
  console.log(req.body)
 const { userId, name, email, phoneNumber, amountPaid } = req.body;
  console.log(email)
  try {
   const orderId = generateOrderId();
   console.log(orderId);
   console.log(typeof(orderId));
   
    var request = {
      order_amount: amountPaid,
      order_currency: "INR",
      order_id: orderId,
      customer_details : {
        customer_id: userId,
        customer_name: name,
        customer_email: email,
        customer_phone: phoneNumber,
      },
      order_meta: {
        return_url:
          "https://www.cashfree.com/devstudio/preview/pg/web/checkout",
      },
    };

   const response =  Cashfree.PGCreateOrder("2023-08-01", request)
      .then((response) => {
        console.log("Order created successfully:", response.data);
        res.send(response.data)
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
      });



  } catch (err) {
    console.error(err);
     if (err.response && err.response.data) {
       res.status(500).json({ error: err.response.data.message });
     } else {
       res.status(500).json({ error: "Internal Server Error" });
     }
  }

  //   console.log("hii, i'm from handle payment");
  //   res.send("function run successfully");
};

module.exports = { handlePayment };
