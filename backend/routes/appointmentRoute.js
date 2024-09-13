const express = require('express');
const  appointmentController  = require('../controler/appointmentController');
const router = express.Router();

router.post('/appointmentbook', appointmentController.bookAppointment)
router.get('/appointmentlist', appointmentController.getAppointmentlist)
router.post('/freeappointment', appointmentController.freeAppointment)
router.get('/getappointment',appointmentController.getAllAppointment)
router.get('/getdoctorsappointment/:doctorId',appointmentController.getDoctorAppointment)
router.delete('/datadelete/:id', appointmentController.deleteAppointment)
router.put('/dataupdate/:id',appointmentController.updateAppointment)


module.exports = router;

