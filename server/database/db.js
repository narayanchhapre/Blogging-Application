import mongoose from 'mongoose';

const Connection = async () => {
    const URL = "mongodb://localhost:27017/blog";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true,useUnifiedTopology:true,family:4 })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;