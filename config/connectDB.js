const mongoose = require('mongoose');

const connectDB = async () => {'http://localhost:3002'
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {'http://localhost:3002'
        console.error(err);
    }
}

module.exports = connectDB;