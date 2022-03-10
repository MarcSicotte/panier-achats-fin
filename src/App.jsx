import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
<<<<<<< HEAD
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Propos from './Propos';
import { authFirebase, authGoogle } from './firebase/init';


import { signInWithPopup, onAuthStateChanged } from "firebase/auth";


function App() {


  // État React pour gérer un panier d'achats
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
  // Remarquez que useState retourne un tableau : 
  // Le premier élément du tableau représente le contenu de l'état
  const panier = etatPanier[0]; 
  // Le deuxième élément est une fonction qui sert à réécrire l'état
  // const setPanier = etatPanier[1]; 
  // Donc, alternativement avec destructuration de tableau
  // const [panier, setPanier] = useState({});

  // État React pour gérer un compteur de clics
  // Remarquez la syntaxe JS de "déstructuration" de tableau : on obtient 
  // rapidement deux variables contenant les deux éléments du tableau retourné 
  // par useState()
  const [compteur, setCompteur] = useState(0); 

  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour exécuter ce code de façon controlée
  
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  
//État de l'utulisateur connecté
  const[util, setUtil] = useState(null);

  /**
   * Délcenche le processus d'authentification avec google auth provider
   */
  function connexion(){

    //utiliser la fonction signInWithPopup 
    signInWithPopup(authFirebase, authGoogle).then(

      infosAuthGoogle => setUtil(infosAuthGoogle.user)
      );
    
  }

  //Attacher un gestinoraire qui observe quand le user est connecter et change d'état quand il est déco (permet de garder le user connecter meme en raffraichissant)
  useEffect(() => onAuthStateChanged(authFirebase, user => setUtil(user)),
  [])
   
  
  return (
    <div className="App">
      {
        util?
        <>
      <Entete util={util} setUtil={setUtil} ali="baba" panier={panier} test="Allo Props" />
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/Propos' element={<Propos/>}></Route>
        <Route path='/Produits' element={ <ListeProduits etatPanier={etatPanier} />}></Route>
       
      </Routes>
      <PiedPage />
      </>
      :
      <button onClick={connexion}>Connexion</button>
      }
    </div>
  );
}
=======
import {useState} from 'react';

function App() {
  const etatPanier = useState({});
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  /*let panier ={

      prd0003: {
       nom: "T-shirt à manches courtes",
       prix: 69.420,
       qte: 1
      },

      allo:{

      },

      bonjours:{

      }*/
      return (
        <div className="App">
          <Entete panier={panier} />
            <ListeProduits panier={panier} setPanier={setPanier}/>
          
          <PiedPage />
        </div>
      );
      
      
  }

  
>>>>>>> 8b17846b1c1fef5331a786ab59268602765caff2

export default App;
