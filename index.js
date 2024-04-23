// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js'
// dotenv.config();
// import express from 'express';




// mongoose.connect(process.env.MONGO)
//     .then(() => {
//         console.log('Connected to MongoDB!')
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log('Le Server tourne sur le port 3000')
// })

// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);

// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message,
//     });
// });

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Importez CORS
import express from 'express';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(cors()); // Activez CORS pour toutes les routes ici
app.use(express.json());

// Vos routes viennent ici
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Le Server tourne sur le port 3000');
});

// Gestion des erreurs
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
