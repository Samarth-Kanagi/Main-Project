const { default: connectDB } = require('./db/db');

require('dotenv').config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at : ${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed",err);
})

