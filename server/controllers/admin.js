import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';  

import Admin from '../models/admin.js';
import User from '../models/user.js';
import Former from '../models/former.js';
import Centre from '../models/centre.js';

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
  


  export const updateAdmin = async (req, res) => {
    const { id: _id } = req.params;
    const infos = req.body;
   
    try {
  
      const admin = await Admin.findOne({ _id });
      const email = infos.email;
      const userexist = await User.findOne({ email });
      const formerexist = await Former.findOne({ email });
      const centerexist = await Centre.findOne({ email });
      
      if (admin) {
        if (admin.email !== infos.email && !userexist && !formerexist && !centerexist && infos.mdpactuel) {
          const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, admin.motdepasse);
          if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
          const hashedpassword = await bcrypt.hash(infos.password, 12);
          const result = await Admin.findByIdAndUpdate(_id, { email: infos.email, motdepasse: hashedpassword }, { new: true });
          const message = "success!";
          res.json({ result, message });
        }
        else if (admin.email !== infos.email && !userexist && !formerexist && !centerexist && !infos.mdpactuel) {
          console.log(`houni`)
          const result = await Admin.findByIdAndUpdate(_id, { email: infos.email}, { new: true });
          const message = "success!";
          console.log(message)
          console.log(`houni`)
  
          res.json({ result, message });
        }
        else if (admin.email === infos.email && infos.mdpactuel) {
          const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, admin.motdepasse);
          if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
          const hashedpassword = await bcrypt.hash(infos.password, 12);
          const result = await Admin.findByIdAndUpdate(_id, {email: infos.email, motdepasse: hashedpassword }, { new: true });
          const message = "success!";
  
          res.json({ result, message });
        }
        else if (admin.email === infos.email && !infos.mdpactuel) {
          console.log('houni')
          const result = await Admin.findByIdAndUpdate(_id, { email: infos.email }, { new: true });
          const message = "success!";
          res.json({ result, message });
        }
  
      }
   
      
  
      
   else if (!admin) return res.status(404).json({ message: "administrateur inexistant" });
  }
    catch (err) {
      res.status(500).json({ message: err.message });
  
    }
  };