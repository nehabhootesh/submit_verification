// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = 3000;

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost:27017/Userdetails', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Mongoose schema and model for verification data
// const verificationSchema = new mongoose.Schema({
//   name: String,
//   hashValue: String,
// }, { collection: 'user' }); // Use 'user' collection

// const Verification = mongoose.model('Verification', verificationSchema);

// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to submit verification data
// app.post('/submit-verification', async (req, res) => {
//   const { name, hashValue } = req.body;

//   try {
//     // Save verification data to MongoDB using Mongoose
//     const verification = new Verification({ name, hashValue });
//     await verification.save();

//     // // Insert data into MongoDB using native MongoDB driver
//     // const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
//     // await mongoClient.connect();
//     // const db = mongoClient.db('Userdetails'); // Use 'Userdetails' database
//     // const collection = db.collection('user'); // Use 'user' collection
//     // const result = await collection.insertOne({ name, hashValue });
//     // console.log(`${result.insertedCount} document inserted into MongoDB using native driver`);
//     // // mongoClient.close();

//     console.log('Verification saved successfully');
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving verification:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// mongoose.connect('mongodb://localhost:27017/Userdetails', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const passengerVerificationSchema = new mongoose.Schema({
//   name: String,
//   hashValue: String,
//   walletAddress: String,
// }, { collection: 'passengerdetails' }); // Use 'passengerdetails' collection

// const PassengerVerification = mongoose.model('PassengerVerification', passengerVerificationSchema);

// const driverVerificationSchema = new mongoose.Schema({
//   name: String,
//   hashValue: String,
//   walletAddress: String,
// }, { collection: 'driverdetails' }); // Use 'driverdetails' collection

// const DriverVerification = mongoose.model('DriverVerification', driverVerificationSchema);

// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to submit passenger verification data
// app.post('/submit-passenger-verification', async (req, res) => {
//   const { name, hashValue, walletAddress } = req.body;

//   try {
//     // Check if the hashValue already exists for a passenger
//     const existingPassenger = await PassengerVerification.findOne({ hashValue });
//     if (existingPassenger) {
//       return res.json({ success: false, error: 'Hash already exists for a passenger' });
//     }

//     // Save verification data to MongoDB for passengers using Mongoose
//     const passengerVerification = new PassengerVerification({ name, hashValue, walletAddress });
//     await passengerVerification.save();
//     console.log('Passenger verification saved successfully');
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving passenger verification:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// // Endpoint to submit driver verification data
// app.post('/submit-driver-verification', async (req, res) => {
//   const { name, hashValue, walletAddress } = req.body;

//   try {
//     // Check if the hashValue already exists for a driver
//     const existingDriver = await DriverVerification.findOne({ hashValue });
//     if (existingDriver) {
//       //alert( "Hash is already submitted and waiting to be verified by thr admin" );
//       return res.json({ success: false, error: 'Hash already exists for a driver' });
      
//     }

//     // Save verification data to MongoDB for drivers using Mongoose
//     const driverVerification = new DriverVerification({ name, hashValue, walletAddress });
//     await driverVerification.save();
//     console.log('Driver verification saved successfully');
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving driver verification:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//above code works with separate db for passenger and driver and avoid duplicates 



// Function to submit passenger verification details
// Function to submit passenger verification details
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// mongoose.connect('mongodb://localhost:27017/Userdetails', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const passengerVerificationSchema = new mongoose.Schema({
//   name: String,
//   hashValue: String,
//   walletAddress: String,
// }, { collection: 'passengerdetails' }); // Use 'passengerdetails' collection

// const PassengerVerification = mongoose.model('PassengerVerification', passengerVerificationSchema);

// const driverVerificationSchema = new mongoose.Schema({
//   name: String,
//   hashValue: String,
//   walletAddress: String,
// }, { collection: 'driverdetails' }); // Use 'driverdetails' collection

// const DriverVerification = mongoose.model('DriverVerification', driverVerificationSchema);

// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to submit passenger verification data
// app.post('/submit-passenger-verification', async (req, res) => {
//   const { name, hashValue, walletAddress } = req.body;

//   try {
//     // Check if the hashValue already exists for a passenger
//     const existingPassenger = await PassengerVerification.findOne({ hashValue });
//     if (existingPassenger) {
//       return res.json({ success: false, error: 'Hash already exists for a passenger please wait for admin verifiaction' });
//     }

//     // Save verification data to MongoDB for passengers using Mongoose
//     const passengerVerification = new PassengerVerification({ name, hashValue, walletAddress });
//     await passengerVerification.save();
//     console.log('Passenger verification saved successfully');
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving passenger verification:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// // Endpoint to submit driver verification data
// // Endpoint to submit driver verification data
// app.post('/submit-driver-verification', async (req, res) => {
//   const { name, hashValue, walletAddress } = req.body;

//   try {
//     // Check if the hashValue already exists for a driver
//     const existingDriver = await DriverVerification.findOne({ hashValue });
//     if (existingDriver) {
//       //alert(`Hash already exists for a driver. Please wait for admin verification.`);
//       return res.json({ success: false, error: 'Hash already exists for a driver. Please wait for admin verification.' });
//     }

//     // Save verification data to MongoDB for drivers using Mongoose
//     const driverVerification = new DriverVerification({ name, hashValue, walletAddress });
//     await driverVerification.save();
//     console.log('Driver verification saved successfully');
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving driver verification:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3003;

mongoose.connect('mongodb+srv://nehab:Tomnjerry@cluster0.c2g9sor.mongodb.net/Userdetails?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const passengerVerificationSchema = new mongoose.Schema({
  name: String,
  hashValue: String,
  walletAddress: String,
}, { collection: 'passengerdetails' }); // Use 'passengerdetails' collection

const PassengerVerification = mongoose.model('PassengerVerification', passengerVerificationSchema);

const driverVerificationSchema = new mongoose.Schema({
  name: String,
  hashValue: String,
  walletAddress: String,
}, { collection: 'driverdetails' }); // Use 'driverdetails' collection

const DriverVerification = mongoose.model('DriverVerification', driverVerificationSchema);

const passengerVerifiedSchema = new mongoose.Schema({
  name: String,
  id: String,
  walletAddress: String,
}, { collection: 'passengerverified' }); // Use 'passengerverified' collection

const PassengerVerified = mongoose.model('PassengerVerified', passengerVerifiedSchema);

const driverVerifiedSchema = new mongoose.Schema({
  name: String,
  id: String,
  walletAddress: String,
}, { collection: 'driververified' }); // Use 'driververified' collection

const DriverVerified = mongoose.model('DriverVerified', driverVerifiedSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to submit passenger verification data
app.post('/submit-passenger-verification', async (req, res) => {
  const { name, hashValue, walletAddress } = req.body;

  try {
    const existingPassenger = await PassengerVerification.findOne({ hashValue });
    if (existingPassenger) {
      return res.json({ success: false, error: 'Hash already exists for a passenger. Please wait for admin verification.' });
    }

    const existingPassengerVerified = await PassengerVerified.findOne({ hashValue });
   if (existingPassengerVerified) {
      return res.json({ success: true, userId: existingPassengerVerified.userId});
    }

    const passengerVerification = new PassengerVerification({ name, hashValue, walletAddress });
    await passengerVerification.save();

    console.log('Passenger verification saved successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving passenger verification:', error.message);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Endpoint to submit driver verification data
app.post('/submit-driver-verification', async (req, res) => {
  const { name, hashValue, walletAddress } = req.body;

  try {
    const existingDriver = await DriverVerification.findOne({ hashValue });
    if (existingDriver) {
      return res.json({ success: false, error: 'Hash already exists for a driver. Please wait for admin verification.' });
    }

    const existingDriverVerified = await DriverVerified.findOne({ hashValue });
    if (existingDriverVerified) {
      return res.json({ success: true, userId1: existingDriverVerified.userId1 });
    }

    const driverVerification = new DriverVerification({ name, hashValue, walletAddress });
    await driverVerification.save();

    console.log('Driver verification saved successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving driver verification:', error.message);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

