const express = require('express');
const cors = require('cors'); // Import CORS
const nodemailer = require('nodemailer')
const connect = require('./config/dbConnection'); // Import the MySQL connection function
const patientRouter = require('./routes/patientRoute');
const doctorRouter = require('./routes/doctorRoute')
const loginRouter = require('./routes/loginRoute.js')
const adminRouter = require('./routes/adminRoute.js')
const specilizationRouter = require('./routes/specilizationroute.js')
const appointmentRouter = require('./routes/appointmentRoute.js')
const crypto = require('crypto')
const { Cashfree } = require("cashfree-pg");
require('dotenv').config();
const paymentRoute = require('./routes/paymentRoute')

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(express.urlencoded({extended: true}))

// Middleware to parse JSON bodies
app.use(express.json());

// Home route to check server status
app.get("/", (req, res) => {
  res.status(200).json({ msg: "server started" });
});

//routes

app.use('/patient',patientRouter)
app.use('/doctor',doctorRouter)
app.use('/login',loginRouter)
app.use('/admin',adminRouter)
app.use('/specilization',specilizationRouter)
app.use('/appointment', appointmentRouter)
app.use('/payment',paymentRoute)






try{
connect();
// Start the server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
}catch(e){
  console.log(e)
}






