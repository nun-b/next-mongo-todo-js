import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    //  DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
    mongoose.set('useCreateIndex', true)
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // 준비 상태의 값을 isConnected 에 넣는다.
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;