const mongoose =require('mongoose')


const connectDB =async() => {
    try {
        await mongoose.connect(process.env.db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log('database connected ...')
        
    } catch (error) {
        console.log('error')
        
    }
}
module.exports=connectDB