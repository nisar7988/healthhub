const { response } = require("express");
const { signupServices , patientData  , deletePatientById , updatePatientById} = require("../service/patientServic");

const userSignup = (req, res) => {
  //  console.log(req);

  signupServices(req.body).then((response) => {
    return res.status(response.statuscode).json(response);
  }).catch((error) => {
    return res.status(error.statuscode).json(error)
  });

}


const data = async (req, res) => {
    try {
        const patients = await patientData();
        res.json({ success: true, data: patients });
    } catch (error) {
        console.error('Error in /patients route:', error);
        res.status(500).json({ success: false, message: 'Error fetching patient data' });
    }
  }


  const deletePatient = async (req, res) => {
    try {
        const { id } = req.params; // Get the patient ID from the request parameters

        // Call the service function to delete the patient
        const result = await deletePatientById(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }

        res.json({ success: true, message: 'Patient deleted successfully' });
    } catch (error) {
        console.error('Error in /patients/:id DELETE route:', error);
        res.status(500).json({ success: false, message: 'Error deleting patient' });
    }
};

// const getdata = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//       const result = await loginUser(email, password);
      
//       if (result.status) {
//           // Return the user profile data on successful login
//           res.status(200).json({ status: true, data: result.data });
//       } else {
//           res.status(400).json({ status: false, message: result.message });
//       }
//   } catch (err) {
//       res.status(500).json({ status: false, message: 'Server error' });
//   }
// }

const updatePatient = async (req, res) => {
  const { id } = req.params;  // Extract patient ID from request parameters
  const { fname, email, phone, gender, address } = req.body;  // Extract updated patient data from the request body

  try {
    // Assuming updatePatientById is a function that runs an SQL query to update the patient by ID
    const result = await updatePatientById(id, fname, email, phone, gender, address);

    // Check if any rows were affected, meaning a patient with the given ID exists
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    // If everything is fine, return success message
    res.json({ success: true, message: 'Patient updated successfully' });

  } catch (error) {
    console.error('Error in /patients/:id PUT route:', error);
    res.status(500).json({ success: false, message: 'Error updating patient' });
  }
};








module.exports = { userSignup , data , deletePatient , updatePatient };