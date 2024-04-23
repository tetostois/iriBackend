const questionSchema = new mongoose.Schema({
    texte: String,
    description: String,
    // Ajoutez d'autres champs de question si nécessaire
});

const Question = mongoose.model('questions', questionSchema);
