import  mongoose from 'mongoose';


mongoose.connect(process.env.MONGO_DB_CONNECTION_URL || 'invalid connection url');

const visitorSchema = new mongoose.Schema({ ts: 'number', agent: 'string' });
export const Visitor = mongoose.model('Visitor', visitorSchema);
