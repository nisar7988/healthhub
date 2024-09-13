const connect = require('../config/dbConnection.js'); // Adjust the path to your actual dbConnection file

const adminData = async (userinfo) => {
    let connection;
    try {
        connection = await connect();

        // Query to fetch all admins
        const adminQuery = `
           SELECT * FROM admin WHERE email = 'neerushakarwal@gmail.com' AND password='14022003';
        `;

        // Execute the query
        const admins = await new Promise((resolve, reject) => {
            connection.query(adminQuery, (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return reject(new Error('Error fetching admin data'));
                }
                resolve(results);
            });
        });

        return admins;

    } catch (error) {
        console.error('Error fetching admin data:', error);
        throw error; // Propagate the error to be handled by the route handler
    } finally {
        if (connection) {
            try {
                connection.end();
            } catch (err) {
                console.error('Error closing the database connection:', err);
            }
        }
    }
};












module.exports = {adminData};