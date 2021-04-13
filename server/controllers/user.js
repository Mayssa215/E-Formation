import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Former from "../models/former.js";
import Centre from "../models/centre.js";
import User from '../models/user.js';
import _ from 'lodash';

import Mailgrid from "@sendgrid/mail";
Mailgrid.setApiKey(
  "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"
);
const url = "http://localhost:3000";

export const signup = async (req, res) => {
  const { firstname, lastname, city, gouvernorate, cin, phone, email, password, confirmerMotdepasse, } = req.body;
  try {
    const userexist = await User.findOne({ email });
    const formerexist = await Former.findOne({ email });
    const centreexist = await Centre.findOne({ email });
    if (userexist || formerexist || centreexist) return res.status(400).json({ message: 'Email exist déjà' });
    if (password !== confirmerMotdepasse) return res.status(400).json({ message: 'confimer votre mot de passe' });
    const hashedpassword = await bcrypt.hash(password, 12);
    const result = await User.create({ firstname, lastname, city, gouvernorate, cin, phone, email, password: hashedpassword });
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1d" });
    res.status(200).json({ result, token });
  }
  catch (error) {
    res.status(500).json({ message: "erreur " });
    console.log(error);
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const userformer = await Former.findOne({ email });
    const usercentre = await Centre.findOne({ email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
      const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "1d" });
      res.status(200).json({ result: user, token });
    }
    else
      if (userformer) {
        const isPasswordCorrect = await bcrypt.compare(password, userformer.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const token = jwt.sign({ email: userformer.email, id: userformer._id }, 'test', { expiresIn: "1d" });
        res.status(200).json({ result: userformer, token });
      }
      else
        if (usercentre) {
          const isPasswordCorrect = await bcrypt.compare(password, usercentre.password);
          if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
          const token = jwt.sign({ email: usercentre.email, id: usercentre._id }, 'test', { expiresIn: "1d" });
          res.status(200).json({ result: usercentre, token });
        }
        else {
          if (!user && !userformer && !usercentre) return res.status(404).json({ message: "utilisateur inexistant" });
        }
  } catch (err) {
    res.status(500).json({ message: "il ya une erreur" });
  }
};

export const forgetpassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    const userformer = await Former.findOne({ email });
    const usercentre = await Centre.findOne({ email });
    if (user) {
      const token = jwt.sign({ email: user.email, id: user._id }, 'resetpass2021', { expiresIn: "30min" });
      const emailinfos = {
        from: 'mayssa.riahi@esen.tn',
        to: email,
        subject: "changer Mot de passe ",
        html: `   
        <h1>Clicker ce lien pour changer votre mot de passe </h1>
         <a href ="${url}/user/resetpassword/${token}" > link </a> 
        <hr />
        <p>Ce link va expirer dans 30 minuttes </p>
              `,
      };
      return user.updateOne({ resetLink: token }, (err, user) => {
        if (err || !user) {
          return res.status(400).json({
            errors: "reset password link error",
          });
        } else {
          Mailgrid
            .send(emailinfos)
            .then(() => {
              return res.send(`a reset password link has been sent to ${email}`);
            })
            .catch((err) => {
              return res.status(400).json({
                err,
              });
            });
        }
      });
    }
    else if (userformer) {
      const token = jwt.sign({ email: userformer.email, id: userformer._id }, 'resetpass2021', { expiresIn: "30min" });
      const emailinfos = {
        from: 'mayssa.riahi@esen.tn',
        to: email,
        subject: "changer Mot de passe ",
        html: `
          <h1>Clicker ce lien pour changer votre mot de passe </h1>
          <p> ${url}/user/resetpassword/${token} </p>
          <hr />
          <p>Ce link va expirer dans 30 minuttes </p>
                `,
      };
      return userformer.updateOne({ resetLink: token }, (err, userformer) => {
        if (err || !userformer) {
          return res.status(400).json({
            errors: "reset password link error",
          });
        } else {
          Mailgrid
            .send(emailinfos)
            .then(() => {
              return res.send(`a reset password link has been sent to ${email}`);
            })
            .catch((err) => {
              return res.status(400).json({
                err,
              });
            });
        }
      });
    }
    else if (usercentre) {
      const token = jwt.sign({ email: usercentre.email, id: usercentre._id }, 'resetpass2021', { expiresIn: "30min" });
      const emailinfos = {
        from: 'mayssa.riahi@esen.tn',
        to: email,
        subject: "changer Mot de passe ",
        html: `
                  <h1>Clicker sur ce lien pour changer votre mot de passe </h1>
                  <p>${url}/user/resetpassword/${token}</p>
                  <hr />
                  <p>Ce link va expirer dans 30 minuttes </p>
              `,
      };
      return usercentre.updateOne({ resetLink: token }, (err, usercentre) => {
        if (err || !usercentre) {
          return res.status(400).json({
            errors: "reset password link error",
          });
        } else {
          Mailgrid
            .send(emailinfos)
            .then(() => {
              return res.send(`a reset password link has been sent to ${email}`);
            })
            .catch((err) => {
              return res.status(400).json({
                err,
              });
            });
        }
      });
    }

    else {
      if (!user && !userformer && !usercentre) return res.status(404).json({ message: "utilisateur inexistant" });
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const resetpassword = async (req, res) => {

  const { resetLink, newpassword } = req.body;
  const hashedpassword = await bcrypt.hash(newpassword, 12);
  const user = await User.findOne({ resetLink });
  const userformer = await Former.findOne({ resetLink })
  const usercentre = await Centre.findOne({ resetLink })
  if (resetLink) {
    jwt.verify(
      resetLink,
      "resetpass2021",
      function (err) {
        if (err) {
          return res.status(400).json({
            error: "Expired link. Try again",
          });
        }

        if (user) {
          const updatedFields = {
            motdepasse: hashedpassword,
          };
          console.log(updatedFields);
          //update the user in the databae
          user == _.extend(user, updatedFields);
          user.save((err, resultat) => {
            if (err) {
              return res.status(400).json({
                error: err.message,
              });
            }
            res.json({
              message: "mot de passe modifier avec succées",
            });
          });

        }
        else if (userformer) {
          const updatedFields = {
            password: hashedpassword,
          };
          console.log(updatedFields);
          //update the user in the databae
          userformer == _.extend(userformer, updatedFields);
          userformer.save((err, resultat) => {
            if (err) {
              console.log(err.message);
              return res.status(400).json({
                error: err.message,

              });

            }
            res.json({
              message: "mot de passe modifier avec succées",
            });
          });
        }
        else if (usercentre) {
          const updatedFields = {
            password: hashedpassword,
          };
          console.log(updatedFields);
          //update the user in the databae
          usercentre == _.extend(usercentre, updatedFields);
          usercentre.save((err, resultat) => {
            if (err) {
              return res.status(400).json({
                error: err.message,
              });
            }
            res.json({
              message: "mot de passe modifier avec succées",
            });
          });
        }
        else {
          if (!user && !userformer && !usercentre) return res.status(404).json({ message: "utilisateur inexistant" });
        }
      }
    );
  }
  else {
    return res.status(401).json({ error: " ressetlink est introuvable " });
  }
};
export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const infos = req.body;

  try {

    const user = await User.findOne({ _id });
    const centre = await Centre.findOne({ _id });
    const former = await Former.findOne({ _id });
    const email = infos.email;
    const userexist = await User.findOne({ email });
    const formerexist = await Former.findOne({ email });
    const centerexist = await Centre.findOne({ email });
    
    if (centre) {
      if (centre.email !== infos.email && !userexist && !formerexist && !centerexist && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, centre.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await Centre.findByIdAndUpdate(_id, { lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, namecities: infos.namecities, namegouvernorate: infos.namegouvernorate, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality, selectedimage: infos.selectedimage, idgouvernorate: infos.idgouvernorate, idcity: infos.idcity, adressexact: infos.adressexact, description: infos.description }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (centre.email !== infos.email && !userexist && !formerexist && !centerexist && !infos.mdpactuel) {
        console.log(`houni`)
        const result = await Centre.findByIdAndUpdate(_id, { lastname: infos.lastname, phone: infos.phone, email: infos.email, namecities: infos.namecities, namegouvernorate: infos.namegouvernorate, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality, selectedimage: infos.selectedimage, idgouvernorate: infos.idgouvernorate, idcity: infos.idcity, adressexact: infos.adressexact, description: infos.description }, { new: true });
        const message = "success!";
        console.log(message)
        console.log(`houni`)

        res.json({ result, message });
      }
      else if (centre.email === infos.email && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, centre.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await Centre.findByIdAndUpdate(_id, { lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, namecities: infos.namecities, namegouvernorate: infos.namegouvernorate, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality, selectedimage: infos.selectedimage, idgouvernorate: infos.idgouvernorate, idcity: infos.idcity, adressexact: infos.adressexact, description: infos.description }, { new: true });
        const message = "success!";

        res.json({ result, message });
      }
      else if (centre.email === infos.email && !infos.mdpactuel) {
        console.log('houni')
        const result = await Centre.findByIdAndUpdate(_id, { lastname: infos.lastname, phone: infos.phone, email: infos.email, namecities: infos.namecities, namegouvernorate: infos.namegouvernorate, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality, selectedimage: infos.selectedimage, idgouvernorate: infos.idgouvernorate, idcity: infos.idcity, adressexact: infos.adressexact, description: infos.description }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }

    }
  if (user) {
      if (user?.email !== infos.email && !userexist && !formerexist && !centerexist && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, selectedimage: infos.selectedimage }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      if (user?.email !== infos.email && !userexist && !formerexist && !centerexist && !infos.mdpactuel) {
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, selectedimage: infos.selectedimage }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (user && user?.email === infos.email && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos?.mdpactuel, user?.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos?.password, 12);
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, selectedimage: infos.selectedimage }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (user && user?.email === infos.email && !infos.mdpactuel) {
        const result = await User.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin, city: infos.city, gouvernorate: infos.gouvernorate, selectedimage: infos.selectedimage}, { new: true });
        const message = "success!";
        console.log('ici');
        res.json({ result, message });
      }
    }
if(former) {
     
      if (former?.email !== infos.email && !userexist && !formerexist && !centerexist && infos.mdpactuel) {
        const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, former.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos.password, 12);
        const result = await Former.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin,  selectedimage: infos.selectedimage, selectedFile: infos.selectedFile,Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description  }, { new: true });
        const message = "success!";

        res.json({ result, message });
      }
      if (former?.email !== infos.email && !userexist && !formerexist && !centerexist && !infos.mdpactuel) {
        const result = await Former.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin,  selectedimage: infos.selectedimage, selectedFile: infos.selectedFile,Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description }, { new: true });
        const message = "success!";
        res.json({ result, message });

      }
      else if (former && former?.email === infos.email && infos.mdpactuel) {
     
        const isPasswordCorrect = await bcrypt.compare(infos?.mdpactuel, former?.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const hashedpassword = await bcrypt.hash(infos?.password, 12);
        const result = await Former.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, password: hashedpassword, cin: infos.cin,  selectedimage: infos.selectedimage, selectedFile: infos.selectedFile,Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description }, { new: true });
        const message = "success!";
        res.json({ result, message });
      }
      else if (former && former?.email === infos.email && !infos.mdpactuel) {
        console.log('ici')
        const result = await Former.findByIdAndUpdate(_id, { firstname: infos.firstname, lastname: infos.lastname, phone: infos.phone, email: infos.email, cin: infos.cin,  selectedimage: infos.selectedimage, selectedFile: infos.selectedFile,Numbreofexperience: infos.Numbreofexperience, idspeciality: infos.idspeciality, namespeciality: infos.namespeciality,description: infos.description}, { new: true });
        const message = "success!";
        res.json({ result, message });
    }
  }

    
 else if (!user && !userformer && !usercentre) return res.status(404).json({ message: "utilisateur inexistant" });
}
  catch (err) {
    res.status(500).json({ message: err.message });

  }
}
