<<<<<<< HEAD
import './BtnAjoutPanier.scss';
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier(props) {

    return (
        <Badge badgeContent={props.qte} color="primary">
            <button onClick={props.onClick} className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>   
    );
}
=======
import './BtnAjoutPanier.scss'
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier(props){
    return (
        <Badge badgeContent={props.qte} color="secondary">
            <button onClick={props.onClick} className='BtnAjoutPanier'>Ajouter au panier</button>
        </Badge>
    );
  }


>>>>>>> 8b17846b1c1fef5331a786ab59268602765caff2
