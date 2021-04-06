import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';  

import Admin from '../models/admin.js';

export const signin = async (req, res) => {

    const {email, password } = req.body;  
    try {
      const admin = await Admin.findOne({ email });

      if (!admin) return res.status(404).json({ message: "utilisateur inexistant" });
      const isPasswordCorrect = await bcrypt.compare(password, admin.motdepasse);
      if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
      const token = jwt.sign({ email: admin.email, id: admin._id }, 'test', { expiresIn: "1h" });
      res.status(200).json({ result: admin, token });
    } catch (err) {
      res.status(500).json({ message: "il ya une erreur" });
    }
  };
  