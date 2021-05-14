import React, { useEffect ,useState} from 'react';
import { useDispatch } from 'react-redux';

import {Bar,Doughnut, Line, Polar} from 'react-chartjs-2';
import useStyles from './styles';
import {getTrainingsformer,getTrainingsadmin,getTrainings} from "../../actions/trainings";
import {getFormer} from "../../actions/former";
import {getCentre} from '../../actions/center';
import {getClients} from '../../actions/users';
import {Countvalidation} from '../../actions/bookings';
import {getFavorite} from '../../actions/favorite';
import {getcategorie} from '../../actions/categorie';
import {getTrainingcateg} from '../../actions/trainings';
import {getTrainingmonths} from '../../actions/trainings';
import {getOpinions} from '../../actions/opinions';
const Statistique = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Trainingscenter, SetTrainingscenter] = useState([]);
  const [Trainingsformer, SetTrainingsformer] = useState([]);
  const [Formers, SetFormers] = useState([]);
  const [centres, SetCentres] = useState([]);
  const [Clients, SetClients] = useState([]);
const[Admin, SetAdmin] = useState([]);
const [bookings,setBookings]=useState([]);
const[favorite,setFavorite] =useState([]);
const [categories, setCategories] = useState([]);
const[nbre, setNbre] = useState([]);
const[mois, setMois] = useState([]);
const [opinion , setOpinion] = useState([]);
  useEffect(() => {
    dispatch(getTrainings()).then((res) => {
      SetTrainingscenter(res.length);
 
    });
  
    dispatch(getTrainingsformer()).then((res) => {
      SetTrainingsformer(res.length);
 
    });
  dispatch(getFormer()).then((res) => {
SetFormers(res.length);
  } );
  dispatch(getCentre()).then((res) => {
    SetCentres(res.length);
      } );
      dispatch(getClients()).then((res) => {
        SetClients(res.length);
          } );

        dispatch(getTrainingsadmin()).then((res) => {
          SetAdmin(res.length);
            } );

dispatch(Countvalidation()).then((res)=>{
setBookings(res);

});
dispatch(getFavorite()).then((res)=>{
  setFavorite(res.length);
  })
  dispatch(getOpinions()).then((res)=>{
    setOpinion(res.length) ;
       })
  dispatch(getcategorie()).then((res)=>{
  res.map((e)=> categories.push(e.nom))
    
    })
  dispatch(getTrainingcateg()).then((res)=>{
  setNbre(res) ;  
      })
  dispatch(getTrainingmonths()).then((res)=>{
  console.log(res);
          setMois(res) ;
  })

  }, [dispatch]); 
   

   
  return (
    <div>
    <div className={classes.divstat}>
    
    <div className={classes.doughnut}>
    <Doughnut
          data={{labels: ['formateurs', 'centres de formations', 'clients'],
 datasets: [
   {
     backgroundColor: [

       '#99A3A4',
      ' #F39C12',
      

       '#AF7AC5'
      ],
     hoverBackgroundColor: [
     '#99A3A4',
    ' #F39C12',
     '#AF7AC5',
    
     ],
     data: [Formers,centres, Clients]
   }
 ]}}
          options={{
            title:{
              display:true,
              //text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  
    
   
   <div className={classes.bar}>
       <Polar
             data={{labels: ['Réservations', 'favoris', 'Avis'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#780B66',
          '#FFA07A',
         ' #D7BDE2 '
       ],
        hoverBackgroundColor: [
        '#780B66',
        '#FFA07A',
        '#D7BDE2 ',
        ],
        data: [bookings,favorite, opinion]
      }
    ]}}
             options={{
               title:{
                 display:true,
                 fontSize:20
               },
               legend:{
                 display:true,
                 position:'right'
               }
             }}
           />
       </div>
       
   </div>
       
    
   <div className={classes.bar2}>
      <Bar 
        data={{

          labels: ['Formateurs', 'Centres de formations' , 'Admin'],
          datasets: [
   {
     label: 'Formations',
     backgroundColor: '#F5B7B1',
   
     borderColor:  '#F5B7B1',
     borderWidth: 2,
     data: [Trainingsformer,Trainingscenter, Admin]
   }
 ]

        }}
        options={{
          title:{
            display:true,
            text:'Les formations ajoutées par',
            fontSize:20
          },
         
        }}
      />
        
    </div>



  <div className={classes.bar2}>
  <Bar 
        data={{

          labels: categories,
          datasets: [
   {
     label: 'Formations',
     backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
     'rgba(255, 205, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(255, 205, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(54, 162, 235, 0.2)',
   ],
   borderColor: [
     'rgb(255, 99, 132)',
     'rgb(255, 159, 64)',
     'rgb(255, 205, 86)',
     'rgb(255, 159, 64)',
     'rgb(255, 205, 86)',
     'rgb(75, 192, 192)',
   ],
   borderWidth: 1,
     data:nbre
   }
 ]

        }}
        options={{
          title:{
            display:true,
            text:'Les formations par catégories',
            fontSize:20
          },
         
        }}
      />

  </div>

 
<div className={classes.bar2}>
<Line
       
       data={{

          labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
          "Juillet", "Août ", "Septembre", "Octobre", "Novembre", "Décembre"
        ],
          datasets: [
   {
     label: 'Formations',
     backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
   ],
   borderColor: [
    'rgb(153, 102, 255)',
   ],
   borderWidth: 1,
     data:mois
   }
 ]

        }}
        options={{
          title:{
            display:true,
            text:'Les formations ajoutées par mois',
            fontSize:20
          },
         
        }}
      /> 
</div>


</div>
  );
};

export default Statistique;



