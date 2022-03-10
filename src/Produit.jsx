import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

<<<<<<< HEAD
export default function Produit({etatPanier: [panier, setPanier], nom, prix, pid}) {
    let qte = 0;
    if(panier[pid]) {
        qte = panier[pid].qte;
    }

    function ajouterAuPanier() {
        if(panier[pid]) {
            panier[pid].qte++;
        }
        else {
            panier[pid] = {
                prix: prix,
                qte: 1
            };
        }
        console.log("Le panier après ajout : ", panier);
        // Notifier React que le panier a changé : 
        // Il faut cloner l'objet panier pour que React détect que le panier a 
        // changé : 
        // let clonePanier = JSON.parse(JSON.stringify(panier));
        // let clonePanier = Object.assign({}, panier);
        // let clonePanier = {... panier}
        // Spread operator : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        
        setPanier({...panier});
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".webp"} alt={nom} />
            <div className="titre">{nom}</div> 
            <div className="prix">{prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />
        </article>
    );
}
=======

export default function Produit(props){
    let setPanier = props.setPanier;
    let panier = props.panier;
    let qte = 0;
        if(panier[props.id]){
            qte = panier[props.pid].qte;
        }

    function ajouterAuPanier(){
        panier[props.pid] = {
            prix: props.prix,
            qte: 1,
        };
        setPanier({panier});
        //Mettre à jour le badge du bouton

        //Mettre à jour le badge du panier dans entete


    }

    return(
        <article className="Produit">
                <img src={"images-produits/" + props.pid + ".webp"} alt={props.nom}/>
                <div className="titre">{props.nom}</div>
                <div className="prix">{props.prix}</div>
                <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />

            </article>
    );
}


>>>>>>> 8b17846b1c1fef5331a786ab59268602765caff2
