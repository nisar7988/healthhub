const connect = require('../config/dbConnection.js'); // Adjust the path to your actual dbConnection file


const signupServicesdoctor = async (payload) => {
    try {
        const { name, email, password, specializationId, contactno, yearofexperience} = payload;

        console.log(name, email, password, specializationId, contactno, yearofexperience);

        const connection = await connect();

        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM signupdoctor WHERE email = ?';
            
            connection.query(sql, [email], (error, result) => {
                if (error) {
                    console.error("Error checking email:", error);
                    resolve({ statuscode: 400, status: false, msg: "Error in registration" });
                } else if (result.length > 0) {
                    resolve({ statuscode: 400, message: 'Email already exists', status: false });
                } else {
                    const sql = `
                        INSERT INTO signupdoctor (name, email, password, specializationId, contactno, yearofexperience)
                        VALUES (?, ?, ?, ?, ?, ?)
                    `;

                    connection.query(sql, [
                        name, email, password, specializationId, contactno, yearofexperience ], (error, result) => {
                            if (error) {
                                console.error("Error inserting data:", error);
                                resolve({ statuscode: 400, status: false, msg: "Error in registration" });
                            } else {
                                console.log("Data added successfully", result);
                                resolve({ statuscode: 200, status: true, msg: "Registered successfully" });
                            }
                        })
                    
                }
            });
        });

    } catch (err) {
        console.error("Error:", err);
        return { statuscode: 500, status: false, msg: "Error in registration" };
    }
}


const doctorsData = async () => {
    let connection;
    try {
        connection = await connect();
        
        // Query to fetch all patients
        const doctorQuery = `
            SELECT  signupdoctor.id, signupdoctor.name, email, specialization.name as 'specialization', contactno, yearofexperience 
            FROM signupdoctor 
            join
            specialization on signupdoctor.specializationId = specialization.id
            
        `;

        const doctors = await new Promise((resolve, reject) => {
            connection.query(doctorQuery, (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return reject(new Error('Error fetching doctor data'));
                }
                resolve(results);
            });
        });

        return doctors;

    } catch (error) {
        console.error('Error fetching doctor data:', error);
        throw error; // Propagate the error to be handled by the route handler
    } finally {
        if (connection) {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', err);
                }
            });
        }
    }

}


const deleteDoctorById = async (id) => {
    let connection;
    try {
        connection = await connect();
        const deleteQuery = 'DELETE FROM signupdoctor WHERE id = ?';

        const result = await new Promise((resolve, reject) => {
            connection.query(deleteQuery, [id], (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return reject('Error deleting doctor');
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error('Error in deleteDoctorById service:', error);
        throw new Error('Error deleting doctor');
    } finally {
        if (connection) {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', err);
                }
            });
        }
    }
};



const updateDoctorById = async (id, name, email, specializationId , contactno, yearofexperience) => {
    let connection;

    try {
        // Establish the database connection
        connection = await connect();

        // SQL query to update the doctor's information
        const updateQuery = `
            UPDATE signupdoctor
            SET name = ?, email = ?, specializationId  = ?, contactno = ?, yearofexperience = ?
            WHERE id = ?
        `;
        const result = await new Promise((resolve, reject) => {
            connection.query(updateQuery, [name, email, specializationId , contactno, yearofexperience,
                id], (err, results) => {
                    if (err) {
                        console.error('Database query error:', err);
                        return reject('Error updating doctor');
                        }
                        resolve(results);
                        });
                        });
                        return result;
                    }
                        catch (error) {
                            console.error('Error updating doctor:', error);
                            throw error; // Throw the error to be handled by the caller
                        } finally {
                            if (connection) {
                                await connection.end(); // Ensure the connection is closed after execution
                            }
                        }
   
}

module.exports = {signupServicesdoctor , doctorsData , deleteDoctorById , updateDoctorById}

