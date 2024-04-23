import mongoose from 'mongoose';


const attestationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    etudiant_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    test_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    note: { type: Number, required: true },
    date: { type: Date, required: true }
});