const immagineuno = new Image();
immagineuno.src = "img/wayne-barnett-founder-ceo.jpg";

const personauno = {
    "foto": immagineuno,
    "nome": "Angela Carroll",
    "incarico": "Founder & CEO"
};

const personadue = {
    "foto": ".jpg",
    "nome": "Angela Carroll",
    "incarico": "Chief Editor"
};

const personatre = {
    "foto": "walter-gordon-office-manager.jpg",
    "nome": "Walter Gordon",
    "incarico": "Office Manager"
};

const personaquattro = {
    "foto": "angela-lopez-social-media-manager.jpg",
    "nome": "Angela Lopez",
    "incarico": "Social Media Manager"
};

const personacinque = {
    "foto": "scott-estrada-developer.jpg",
    "nome": "Scott Estrada",
    "incarico": "Developer"
};

const personasei = {
    "foto": "barbara-ramos-graphic-designer.jpg",
    "nome": "Barbara Ramos",
    "incarico": "Graphic Designer"
};

for (let key in personauno) {
    document.querySelector(".personauno").innerHTML += personauno[key];
}



