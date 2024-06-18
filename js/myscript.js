let imgpersonauno = new Image();
imgpersonauno.src = "img/wayne-barnett-founder-ceo.jpg";
imgpersonauno.classList.add("img");

let imgpersonadue = new Image();
imgpersonadue.src = "img/angela-caroll-chief-editor.jpg";
imgpersonadue.classList.add("img");

let imgpersonatre = new Image();
imgpersonatre.src = "img/walter-gordon-office-manager.jpg";
imgpersonatre.classList.add("img");

let imgpersonaquattro = new Image();
imgpersonaquattro.src = "img/angela-lopez-social-media-manager.jpg";
imgpersonaquattro.classList.add("img");

let imgpersonacinque = new Image();
imgpersonacinque.src = "img/scott-estrada-developer.jpg";
imgpersonacinque.classList.add("img");

let imgpersonasei = new Image();
imgpersonasei.src = "img/barbara-ramos-graphic-designer.jpg";
imgpersonasei.classList.add("img");

const personauno = {
    foto: imgpersonauno,
    nome: "Wayne Barnett •",
    incarico: " Founder & CEO"
};

const personadue = {
    foto: imgpersonadue,
    nome: "Angela Carroll •",
    incarico: " Chief Editor"
};

const personatre = {
    foto: imgpersonatre,
    nome: "Walter Gordon •",
    incarico: " Office Manager"
};

const personaquattro = {
    foto: imgpersonaquattro,
    nome: "Angela Lopez •",
    incarico: " Social Media Manager"
};

const personacinque = {
    foto: imgpersonacinque,
    nome: "Scott Estrada •",
    incarico: " Developer"
};

const personasei = {
    foto: imgpersonasei,
    nome: "Barbara Ramos •",
    incarico: " Graphic Designer"
};

for (let key in personauno) {
    let imgpersona = document.querySelector(".personauno");
    imgpersona.append(personauno[key]);
}

for (let key in personadue) {
    let imgpersona = document.querySelector(".personadue");
    imgpersona.append(personadue[key]);
}

for (let key in personatre) {
    let imgpersona = document.querySelector(".personatre");
    imgpersona.append(personatre[key]);
}

for (let key in personaquattro) {
    let imgpersona = document.querySelector(".personaquattro");
    imgpersona.append(personaquattro[key]);
}

for (let key in personacinque) {
    let imgpersona = document.querySelector(".personacinque");
    imgpersona.append(personacinque[key]);
}

for (let key in personasei) {
    let imgpersona = document.querySelector(".personasei");
    imgpersona.append(personasei[key]);
}