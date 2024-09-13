const { response } = require("express");
const appointmentServices = require('../service/appointmentService');
const sendMail = require('../config/nodeMailer')



// const bookappointment = async (req, res) => {
//   try {
//     // Destructure fields from request body
//     const { specialty, date, doctorName, time } = req.body;

//     // Validate required fields
//     if (!specialty || !date || !doctorName ) {
//       return res.status(400).json({ success: false, message: 'Missing required fields' });
//     }

//     // Prepare the payload for the service function
//     const payload = {
//       specialty,
//       date,
//       doctorName,
//       time

//     };

//     // Call the appointment service
//     const result = await appointmentServices(payload);

//     // Respond with the result from the service
//     res.status(200).json(result);
//   } catch (error) {
//     // Log the error and respond with a generic error message
//     console.error('Error in /appointment route:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };
const bookAppointment = async (req, res) => {
  try {
    const appointmentData = {
      // doctorId: req.body.doctorId,
      id: req.body.id,
      date: req.body.date,
      time: req.body.time,
      bookedBy: req.body.bookedBy,
    };

    const result = await appointmentServices.bookAppointment(appointmentData);
    console.log(result.success);

    if (result.success) {
      console.log("result", result);

      const sendmail = await sendMail.sendmailAppointment(req.body);
      if (sendmail.success) {
        return res.status(200).json({ success: true, message: 'Appointment booked successfully' });

      }

    } else {
      return res.status(400).json({ success: false, message: 'Failed to book appointment' });
    }
  } catch (error) {
    console.error('Error booking appointment:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};




const getAppointmentlist = async (req, res) => {
  try {
    const getdata = await appointmentServices.viewAppointment(req.query);
    return res.status(200).json(getdata);

  } catch (error) {
    console.error('Error fetching appointment list:', error);
    return res.status(500).json({ success: false, message: error.message });

  }

}





const freeAppointment = async (req, res) => {
  const { doctorId, date, time } = req.body;
  if (!doctorId || !date || !time) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }


  try {
    const appointmentData = {
      doctorId,
      date,
      time,
      bookedBy: null, // Assuming this is supposed to be null initially
      booked: false,  // Setting booked to false by default
    };

    const result = await appointmentServices.freeAppointmentbook(appointmentData);

    if (result.success) {
      return res.status(200).json({ success: true, message: "Appointment booked successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Failed to book appointment" });
    }
  } catch (error) {
    console.error("Error booking appointment:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}


const getAllAppointment = async(req , res) => {
  try {
    const getdata = await appointmentServices.getAppointment();
    return res.status(200).json({success:true,data:getdata});
    } catch (error) {
      console.error('Error fetching appointment list:', error);
      return res.status(500).json({ success: false, message: error.message });
      }
      

}


// const getDoctorAppointment = async (req, res) => {
//   const {doctorId} = req.query;
//   try {
//     const getdata = await appointmentServices.getDoctorAppointment(doctorId);
//     return res.status(200).json({success:true,data:getdata});
//   }
//   catch(error) {
//     console.error('Error fetching doctor appointment list:', error);
//     return res.status(500).json({ success: false, message: error.message });
//   }


// }
const getDoctorAppointment = async (req, res) => {
  console.log(req.params);
  
  const { doctorId } = req.params;  // Extract doctorId from query params
  console.log(doctorId);
  
  // Check if doctorId is present
  if (!doctorId) {
    return res.status(400).json({ success: false, message: 'doctorId is required' });
  }

  try {
    // Fetch appointments for the specific doctor using doctorId  
    const appointments = await appointmentServices.getDoctorAppointment(doctorId);

    // Check if appointments exist for this doctor
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ success: false, message: 'No appointments found for this doctor.' });
    }

    // Return the appointments for this doctor
    return res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching doctor appointment list:', error);
    return res.status(500).json({ success: false, message: 'Error fetching doctor appointment list' });
  }
};



const deleteAppointment = async (req, res) => {
  const { id  }= req.params;
console.log(req.params)
console.log(id)
  if (!id) {
      return res.status(400).json({ success: false, message: 'Missing appointment ID' });
  }

  try {
      const result = await appointmentServices.deleteAppointmentId(id);
      if (result.affectedRows === 0) {
          return res.status(404).json({ success: false, message: 'Appointment not found' });
      }
      res.json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error) {
      console.error('Error in /appointment/delete/:id DELETE route:', error);
      res.status(500).json({ success: false, message: 'Error deleting appointment' });
  }
};


const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const {  doctor_name, date, time, booked, patient_name } = req.body;
   console.log("request datais",req.body);
  // console.log(doctor_name);
  // console.log(patient_name);
  // console.log(booked)
  // console.log(time)
  // console.log(date)
  // console.log(id)
  
  // if (!id || !doctor_name || !date || !time || booked  || !patient_name) {
  //   return res.status(400).json({ success: false, message: 'Missing required fields' });
  // }

  try {
    console.log("working");
    const result = await appointmentServices.updateAppointmentId(id, doctor_name, date, time, booked, patient_name);
    
    if (result.success && result.result.affectedRows > 0) {
      return res.json({ success: true, message: 'Appointment updated successfully' });
    } else if (result.success && result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    } else {
      return res.status(500).json({ success: false, message: result.message || 'Error updating appointment' });
    }
  } catch (error) {
    console.error('Error in /appointment/update/:id PUT route:', error);
    res.status(500).json({ success: false, message: 'Error updating appointment' });
  }
};






module.exports = { bookAppointment, getAppointmentlist, freeAppointment, getAllAppointment , getDoctorAppointment , deleteAppointment , updateAppointment};
