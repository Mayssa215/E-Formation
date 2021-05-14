import React from 'react';

import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";
import { VscTasklist } from "react-icons/vsc";
import { FaRegCommentDots } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import {VscAccount} from "react-icons/vsc";
import {AiOutlineLogout} from 'react-icons/ai';
export const SidebarData = [
  {
    title: 'Gérer formations',
    path: '/Formations',
    icon: <FaGraduationCap />,
  

  },
  {
    title: 'Gérer formateurs',
    path: '/Formateurs',
    icon: <GiTeacher />,
    

  },
  {
    title: 'Gérer centres de formation',
    path: '/centresdeformation',
    icon: <FaBuilding />
  },
  {
    title: 'Gérer clients',
    path: '/clients',
    icon: <FaUsers />
  },
  {
    title: 'Gérer réservations',
    path: '/réservations',
    icon: <FaCalendarCheck />,
    
  },
  
  {
    title: 'Gérer catégories',
    path: '/catégories',
    icon: <VscTasklist />
  },
  {
    title: 'Gérer avis',
    path: '/avis',
    icon: <FaRegCommentDots />
  },
  {
    title: 'Gérer profil',
    path: '/monprofil',
    icon: <VscAccount />
  },
  {
    title: 'Statistique',
    path: '/dash',
    icon: <ImStatsDots />
  },
  {
    title: 'Déconnexion',
    path: '/déconnexion',
    icon: <AiOutlineLogout />
  },
];
