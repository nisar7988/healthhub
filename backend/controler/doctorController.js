const express = require('express')
const {signupServicesdoctor , doctorsData , deleteDoctorById , updateDoctorById} = require('../service/doctorService')


const dortorsignup = (req, res) => {
    //  console.log(req);
  
    signupServicesdoctor(req.body).then((response) => {
      return res.status(response.statuscode).json(response);
    }).catch((error) => {
      return res.status(error.statuscode).json(error)
    });
  
  }

  const data = async (req, res) => {
    try {
        const doctors = await doctorsData();
        res.json({ success: true, data: doctors });
    } catch (error) {
        console.error('Error in /patients route:', error);
        res.status(500).json({ success: false, message: 'Error fetching doctor data' });
    }
  }







  const deleteDoctor = async (req, res) => {
    try {
      const {id } = req.params;
      const result = await deleteDoctorById(id); // Implement this in your controller
      if (result.affected === 0) {
                    return res.status(404).json({ success: false, message: 'doctor not found' });

      }
      res.json({ success: true, message: 'doctor deleted successfully' });
      
      
    } catch (error) {
              console.error('Error in /doctor/:id DELETE route:', error);
              res.status(500).json({ success: false, message: 'Error deleting patient' });
          }
  }



  const updateDoctor = async (req, res) => {
    const { id } = req.params; // Get the doctor's ID from the request parameters
    const { name, email, specializationId , contactno, yearofexperience } = req.body; // Get the updated fields from the request body

    try {
        // Call the function to update the doctor by ID, passing in the necessary fields
        const result = await updateDoctorById(id, name, email, specializationId , contactno, yearofexperience);
        
        // Check if any rows were affected by the update query
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        // If the update was successful, send a success response
        res.json({ 
            success: true, 
            message: 'Doctor updated successfully' 
        });
    } catch (error) {
        // If an error occurs during the update process, log it and send a 500 response
        console.error('Error in /doctor/:id PUT route:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error updating doctor' 
        });
    }
};

  module.exports = {dortorsignup,  data , deleteDoctor, updateDoctor}