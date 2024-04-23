import mongoose from 'mongoose';

const etudiantSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: String, required: false },
    mot_de_passe: { type: String, required: true },
    lieu_naissance: { type: String, required: false },
    region_residence: { type: String, required: false },
    profession: { type: String, required: false },
    nom_entreprise: { type: String, required: false },
    chiffre_affaire: { type: Number, required: false },
}, { timestamps: true });
const Etudiant = mongoose.model('Etudiant', etudiantSchema);

export default Etudiant;