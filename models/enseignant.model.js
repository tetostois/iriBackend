import mongoose from 'mongoose';

const enseignantSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: String, required: false },
    mot_de_passe: { type: String, required: true },
})
const Enseignant = mongoose.model('Enseignant', enseignantSchema);

export default Enseignant;