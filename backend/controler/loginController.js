const { response } = require("express");
const { loginServices , UserData } = require("../service/loginService");
// const { data } = require("./patientController");






// const login = async (req, res) => {
//   try {
//     loginServices(req.body).then((response) => {
//       return res.status(response.statuscode).json(response);
//     }
//     catch (error) {
//       res.status(500).json({ success: false, message: 'Error fetching admin data' });
//   }
//   }

const login = async (req, res) => {
  try {
    const logins = await loginServices(req.body);
    res.json({success: true, data: logins});

    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching admin data' });
  }
}


const getData = async (req, res) => {
    try {
        const admins = await UserData(req.query);
        // console.log(req.query.data)
        res.json({ success: true, data: admins });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching admin data' });
    }
}

module.exports = { getData , login}







