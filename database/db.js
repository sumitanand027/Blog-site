import mongoose from 'mongoose';



const Connection = async ( URL ) => {
    try {
    
        await mongoose.connect( URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log( 'mongodb is connected')
    } catch( err ) {
        console.log( "Error while connecting to mongodb" , err );
    }
};

export default Connection;