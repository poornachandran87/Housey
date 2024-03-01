const mongoose = require('mongoose')

const setConnection = () => {
    
    mongoose.connect(process.env.DB_LOCAL_URL)
    .then(con => {console.log(`MongoDB is connected to the host : ${con.connection.host}`)})
    
   

}

module.exports = setConnection;