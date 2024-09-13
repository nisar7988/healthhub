const connect = require('../config/dbConnection.js'); // Adjust the path to your actual dbConnection file



// const bcrypt = require('bcrypt');

const loginServices = async (payload) => {
    const { email, password, userType } = payload;
    try {
        const connection = await connect();

        // Determine which table to query based on userType
        let sql;
        switch (userType) {
            case 'admin':
                sql = 'SELECT * FROM admin WHERE Email = ?';
                break;
            case 'doctor':
                sql = 'SELECT * FROM signupdoctor WHERE Email = ?';
                break;
            case 'patient':
                sql = 'SELECT * FROM signuppatient WHERE Email = ?';
                break;
            default:
                return { statuscode: 400, status: false, msg: "Invalid user type" };
        }

        // Execute the query
        const results = await new Promise((resolve, reject) => {
            connection.query(sql, [email], (error, results) => {
                if (error) {
                    console.error('Database query error:', error);
                    return reject(error);
                }
                resolve(results);
            });
        });

        // Check if results exist
        if (results && results.length > 0) {
            const user = results[0];
            
            console.log('Stored password:', user.password);
            console.log('Entered password:', password);
            
            // Check password
            if (user.password === password) {
                await connection.end(); // Close the connection
                return { statuscode: 200, status: true, msg: `${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful`, userType };
            } else {
                await connection.end(); // Close the connection
                return { statuscode: 400, status: false, msg: "Incorrect password" };
            }
        } else {
            await connection.end(); // Close the connection if no match is found
            return { statuscode: 400, status: false, msg: "Email not found" };
        }
        
    } catch (err) {
        console.error('Error during login:', err);
        return { statuscode: 500, status: false, msg: "Error during login" };
    }
}



// function for fetc the data of user

const UserData = async (userinfo) => {
    let connection;
    try {
        let sql1;
        connection = await connect();
        const { email , password } = userinfo.data;
        const role = userinfo.role;

        console.log(role)
       switch(role){
        case 'admin':
            sql1 = `
           SELECT * FROM admin WHERE email =? AND password=?;
        `;
          break;
        case 'patient':
          sql1 = `SELECT * FROM signuppatient WHERE email =? AND password=?`;
         break;
         case 'doctor':
          sql1 = `SELECT signupdoctor.*,specialization.name as specialization  FROM signupdoctor join specialization on specialization.id = signupdoctor.specializationId WHERE email =? AND password=?  `;
          break;

         default:
            return { statuscode: 400, status: false, msg: "user not found" };
       }
        // Query to fetch all admins
       

        // Execute the query
        const admins = await new Promise((resolve, reject) => {
            connection.query(sql1,[email, password], (err, results) => {
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
















module.exports = {
    loginServices,
    UserData
};



// const loginServices = async (payload) => {
//     try {
//         const { email, password } = payload;
//         const connection = await connect();
//         return new Promise((resolve, reject) => {

//             const sql = 'select * from signuppatient where email = ? '
//             connection.query(sql, [email], async (error, result) => {
//                 if (error) {
//                     console.error("Error inserting data:", error);
//                     resolve({ statuscode: 400, status: false, msg: "Error in registration" });
//                 }
//                 else if (result.length == 0) {
//                     resolve({ statuscode: 400, status: false, msg: "Email not found"});
//                 }else {
                    

//             const sql = 'select * from signuppatient where password = ?'
//             connection.query(sql, [password], (error, result) => {
//                 if (error) {
//                     console.error("Error inserting data:", error);
//                     resolve({ statuscode: 400, status: false, msg: "Error in registration"});
//                     }
//                     else if (result.length == 0) {
//                         resolve({ statuscode: 400, status: false, msg: "Password not found"});
//                         }
//                         else {
//                             resolve({ statuscode: 200, status: true, msg: "Login successfully"
// });
//                                 }

                            
//                                 });
                
//                     // const isPasswordValid = await bcrypt.compare(password, user.password);

//                     // if (!isPasswordValid) {
//                     //   resolve({ statuscode: 400, status: false, msg: "Password does not match" });
//                     // } else {
//                     //   resolve({ statuscode: 200, status: true, msg: "Login successful" });
//                     // }
//                   }
//                 // console.log(result[0].password);

//             })
//         })
//     } catch {
//         return { statuscode: 500, status: false, msg: "Error in login" };
//     }
// }

// module.exports = { loginServices };



// const hashedPassword = await bcrypt.hash(password, 10);

// // Compare the hashed password with the stored password
// const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);

// if (isPasswordValid) {
//   await connection.end(); // Close the connection
//   return { statuscode: 200, stat