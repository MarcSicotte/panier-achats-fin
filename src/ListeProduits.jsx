<<<<<<< HEAD
import './ListeProduits.scss';
import Produit from './Produit';
import { useState, useEffect } from 'react';
import {bdFirestore} from './firebase/init';
import {collection, getDocs} from 'firebase/firestore';

/***** FIREBASE *****/




  
 






/***** FIN FIREBASE *****/


export default function ListeProduits({etatPanier}) {
     //Variable qui va contenire les produits de la collection firstore
    const [produits, setProduits] = useState([]);

    useEffect(function(){

        //Obtenir les données de la collection 'maggen-produits'
            getDocs(collection(bdFirestore, 'maggen-produits')).then(
            qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()}))) // la fonction doc créer un objet id qui prend les id du doc (maggen-produits) puis utilise spread pour parcourir les collection que contient les datas
        );

    }, []);
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
=======
import'./ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produit.json';

export default function ListeProduits(props){
    return(
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className='produits'>
                {
                    lesProduits.map(produit => <Produit setPanier={props.setPanier} panier={props.panier} key={produit.id} nom={produit.nom} prix={produit.prix} pid={produit.id}/>)
                }
               

            
            </div>
      </section>
    )
>>>>>>> 8b17846b1c1fef5331a786ab59268602765caff2
}