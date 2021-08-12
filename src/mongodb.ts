import  mongoose from 'mongoose';


mongoose.connect('mongodb+srv://otusjs:otusbasic@cluster0.x303g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const visitorSchema = new mongoose.Schema({ ts: 'number', agent: 'string' });
export const Visitor = mongoose.model('Visitor', visitorSchema);
