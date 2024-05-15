/*****  MILESTONE 0 (creazione array di oggetti) *****/
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manage',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
];

// console.log(team);

const Ulpersone = document.getElementById('lista-persone'); //prendo la ul creata nel DOM


/**** MILESTONE 1 (stampa dell'array in conosle) ****/
// ciclo tutto l'array di oggetti
for (let person of team) { //person è un oggetto 
    /*for(let key in person){ //ciclo tutte le chiavi di person
        console.log(`${key}: ${person[key]}`); //stampo la chiave e il suo valore in console
    }
    console.log('-----------------'); // console log per dividere le persone
    */
//    console.log(person);


/*** MILESTONE 2 (stampa dell'array nel dom)***/
    const li = document.createElement('li'); //creo li



    const foto = document.createElement('img');
    foto.src = 'img/' + person.foto;
    // console.log(foto);
    foto.classList.add('foto');
    li.append(foto);
    Ulpersone.append(li);

    const nome = document.createElement('div'); //creo un div
    nome.innerText = person.nome; //scrivo nel div il nome della persona
    // console.log(nome);
    nome.classList.add('nome');
    li.append(nome); //lo aggiungo a li

    const ruolo = document.createElement('div');
    ruolo.innerText = person.ruolo;
    // console.log(ruolo);
    ruolo.classList.add('ruolo');
    li.append(ruolo);
}

    

