import { errorHandler } from "../error.js";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    console.log(req.body);
    const { nom, prenom, email, password, telephone, dateNaissance, lieuNaissance, regionResidence, profession, nomEntreprise, chiffreAffaire } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // const newUser = new User({ nom, prenom, email, password: hashedPassword, telephone, dateNaissance, lieuNaissance, regionResidence, profession, nomEntreprise, chiffreAffaire });
    const newUser = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hashedPassword,
        telephone: req.body.telephone,
        dateNaissance: req.body.dateNaissance,
        lieuNaissance: req.body.lieuNaissance,
        regionResidence: req.body.regionResidence,
        profession: req.body.profession,
        nomEntreprise: req.body.nomEntreprise,
        chiffreAffaire: req.body.chiffreAffaire
    });

    try {

        await newUser.save();
        res.status(201).json("Utilisateur creer avec succes! ");

    } catch (error) {
        //next(errorHandler(550, 'error from the function'));
        next(error);
    }
}

export const signin = async (red, res, next) => {
    const { email, password } = red.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, " vous n'avez pas de compte !"))
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Mot de passe invalide'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
}  