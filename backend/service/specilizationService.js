
const connect = require('../config/dbConnection.js');

const getSpecialization = async (payload) => {
    let connection;

    const sql = "select * from specialization";
    try {
        connection = await connect();

        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                    console.log(err);

                }
                resolve(results);
                console.log(results);

            })
        })

    } catch (error) {
        console.log(error);
        throw error

    }
    finally {
        if (connection) {
            try {
                connection.end();
            } catch (err) {
                console.error('Error closing the database connection:', err);
            }
        }
    }

}


const getDoctorsBySpecializationId = async (payload) => {

    let connection;
    const sql = "SELECT * FROM signupdoctor WHERE specializationId = ?";
    try {
        connection = await connect();
        return new Promise((resolve, reject) => {
            connection.query(sql, [payload], (err, results) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(results);
                console.log(results);

        })
        })
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
    finally {
        if (connection) {
            try {
                connection.end();
            } catch (err) {
                console.error('Error closing the database connection:', err);
            }
        }
    }
}

module.exports={getSpecialization , getDoctorsBySpecializationId}