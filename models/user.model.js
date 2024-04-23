

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        nom: { type: String, required: true, unique: true },
        prenom: { type: String, required: true, unique: true },
        dateNaissance: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        telephone: { type: String, required: false },
        lieuNaissance: { type: String, required: false },
        regionResidence: { type: String, required: false },
        profession: { type: String, required: false },
        nomEntreprise: { type: String, required: false },
        chiffreAffaire: { type: Number, required: false },
        // role: {
        //     type: String,
        //     required: true,
        //     default: "0x01",
        // },
    },
    { timestamps: true }
);

// userSchema.pre("save", function (next) {
//     const user = this;

//     if (!user.isModified("password")) return next();
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) return next(err);

//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) return next(err);

//             user.password = hash;
//             next();
//         });
//     });
// });

const User = mongoose.model("User", userSchema);

export default User;