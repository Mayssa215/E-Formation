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
  const { nom, prenom, villeu, gouvernoratu, cin, telephone, email, motdepasse, confirmerMotdepasse, } = req.body;
  try {
    const userexist = await User.findOne({ email });
    const formerexist = await Former.findOne({email});
    const centreexist = await Centre.findOne({email});
    if (userexist || formerexist || centreexist) return res.status(400).json({ message: 'Email exist déjà' });
    if (motdepasse !== confirmerMotdepasse) return res.status(400).json({ message: 'confimer votre mot de passe' });
    const hashedpassword = await bcrypt.hash(motdepasse, 12);
    const result = await User.create({ nom, prenom, villeu, gouvernoratu, cin, telephone, email, motdepasse: hashedpassword });
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1d" });
    res.status(200).json({ result, token });
  }
  catch (error) {
    res.status(500).json({ message: "erreur " });
    console.log(error);

  }
}

export const signin = async (req, res) => {
  const { email, motdepasse } = req.body;
  try {
    const user = await User.findOne({ email });
    const userformer = await Former.findOne({ email });
    const usercentre = await Centre.findOne({ email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(motdepasse, user.motdepasse);
      if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
      const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "1d" });
      res.status(200).json({ result: user, token });
    }
    else
      if (userformer) {
        const isPasswordCorrect = await bcrypt.compare(motdepasse, userformer.motdepasse);
        if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
        const token = jwt.sign({ email: userformer.email, id: userformer._id }, 'test', { expiresIn: "1d" });
        res.status(200).json({ result: userformer, token });
      }
      else
        if (usercentre) {
          const isPasswordCorrect = await bcrypt.compare(motdepasse, usercentre.motdepasse);
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

  const { resetLink, newpassword } = req.body ;
  const hashedpassword = await bcrypt.hash(newpassword, 12);
  const user = await User.findOne({resetLink});
  const userformer = await Former.findOne({resetLink})
  const usercentre = await Centre.findOne({resetLink})
  if (resetLink ) {
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
          user ==_.extend(user, updatedFields);
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
    motdepasse: hashedpassword,
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
    motdepasse: hashedpassword,
  };
  console.log(updatedFields);
  //update the user in the databae
  usercentre  == _.extend(usercentre, updatedFields);
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
  const { id : _id } = req.params;
  const infos = req.body;
  
  try{
    const user = await User.findOne({ _id });
    const email = infos.email;
    const userexist = await User.findOne({ email });
    const formerexist = await Former.findOne({ email });
    const centerexist = await Centre.findOne({ email });
  if ( user.email !== infos.email && !userexist && !formerexist && !centerexist ) {

  const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, user.motdepasse);
  if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
  const hashedpassword = await bcrypt.hash(infos.motdepasse, 12);
  const result = await User.findByIdAndUpdate(_id,{nom: infos.nom, prenom:infos.prenom, telephone:infos.telephone,email:infos.email,motdepasse:hashedpassword, cin:infos.cin, villeu:infos.villeu,gouvernoratu:infos.gouvernoratu}, { new: true });
  const message="success!";
  res.json({result,message });
 }
  else
  if (user && user.email === infos.email) {
  const isPasswordCorrect = await bcrypt.compare(infos.mdpactuel, user.motdepasse);
  if (!isPasswordCorrect) return res.status(400).json({ message: "mot de passe incorrect" });
  const hashedpassword = await bcrypt.hash(infos.motdepasse, 12);
  const result = await User.findByIdAndUpdate(_id,{nom: infos.nom, prenom:infos.prenom, telephone:infos.telephone,email:infos.email,motdepasse:hashedpassword, cin:infos.cin, villeu:infos.villeu,gouvernoratu:infos.gouvernoratu , image:infos.image}, { new: true });
  const message="success!";
  res.json({result, message });
  }
  else return res.status(404).json({ message: "user inexistant" });
}
catch (err){
  res.status(500).json({ message: err.message });
}
}
