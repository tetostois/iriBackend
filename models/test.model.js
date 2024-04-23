import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titre: { type: String, required: true },
    description: { type: String, required: true },
    duree: { type: Number, required: true },
    parties: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            titre: { type: String, required: true },
            questions: [
                {
                    _id: mongoose.Schema.Types.ObjectId,
                    type: { type: String, required: true, enum: ['QCM', 'Réponse Courte'] },
                    texte: { type: String, required: true },
                    reponses: [
                        {
                            _id: mongoose.Schema.Types.ObjectId,
                            texte: { type: String, required: true },
                            correcte: { type: Boolean, required: true }
                        }
                    ]
                }
            ]
        }
    ]
});


