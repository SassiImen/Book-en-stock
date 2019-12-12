// import $ from 'jquery';
import { prop } from 'ramda';
import { books} from './data/books';

// Créer  <titre>
const titre = document.createElement('h1');
titre.textContent = 'Book en stock';
const app = document.getElementById('app');
app.appendChild(titre);


const afficherDescription = function (a) {
    return `${a.titre} :La Résumé de Ce livre est : ${a.resume},  Voilà L'Auteur ${a.auteur}, et il est dans la Categorie ${a.categorie} , ${a.image} `;
  };

  const getRandom = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
    
  };
  

let btn1;
let div1;


for (const book of books){
    div1 = document.createElement('p');
    div1.className = 'resume';
   
    div1.innerText = afficherDescription(book);
    app.appendChild(div1);
    btn1 = document.createElement('BUTTON');
   btn1.id = book.id;
   btn1.textContent = 'Reserver';
   app.append(btn1);
  const img = document.createElement('img');
    img.setAttribute('src', book.image);
  div1.append(img);
  img.style.width = '100px';
  img.style.height = '100px';

  
//   btn1.disabled = true;
  btn1.addEventListener('click', () => {
    const bookResTitre = document.createElement('h2');
    const bookResAuteur = document.createElement('h2');

    bookResTitre.innerText = book.titre;
    bookResAuteur.innerText = book.auteur;

    panier.append(bookResTitre);
    panier.append(bookResAuteur);


    // <Emprunter>
    const btnRemove = document.createElement('BUTTON');
    btnRemove.textContent = 'Emprunter';
    panier.appendChild(btnRemove);
    btnRemove.addEventListener('click', () => {

      const bookReserveTitre = document.createElement('h2');
      const bookReserveAuteur = document.createElement('h2');

      bookReserveTitre.innerText = book.titre;
      bookReserveAuteur.innerText = book.auteur;


      panier.remove(bookReserveTitre);
      panier.remove(bookReserveAuteur);

      //Annuler la commande
   
    confirm('Vos six Livres sont Empruntés , Vous pouvez passer les chercher aujourd.hui, avant 14h+2');
    
        {
        alert("Annuler la Commande")
        }


    });
  });
}

 
const titreBooks = books.map(prop('titre'));

// Créer <Head>
const head = document.createElement('header');
app.insertBefore(head, app.firstChild);




// <Image>
const imgBook = books.map(prop('image'));

const img = document.createElement('img');



const imgUrl = getRandom(imgBook);
console.log('url', imgUrl);
img.setAttribute('src', imgUrl);
head.appendChild(img);
img.style.width = '15%';

//



//  <Affichage>
console.log(getRandom(books));
console.log(getRandom(titreBooks));


// Créer <Reservation est vide>
const reservactionVide = document.createElement('h3');
reservactionVide.textContent = 'Reservaction en cours ';
app.appendChild(reservactionVide);

// Créer <panier est Vide >
const panier = document.createElement('h2');
panier.textContent = 'panier est vide';
app.appendChild(panier);



//bouton annuler la commande
var btnAnnuler = document.createElement("BUTTON");        
var t = document.createTextNode("Annuler la commande");     
btnAnnuler.appendChild(t);                               
document.body.appendChild(btnAnnuler); 
