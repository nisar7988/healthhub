const { response } = require("express");
const { adminData } = require('../service/adminService')




const getData = async (req, res) => {
    try {
        const admins = await adminData(req.body);
        res.json({ success: true, data: admins });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching admin data' });
    }
}

module.exports = { getData }
