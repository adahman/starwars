// an app that displays data from a star wars api

// global variables
const wrapper = document.getElementById("wrapper");

// get all sw characters
async function getAllCharacters() {
    const response = await fetch("https://swapi.py4e.com/api/people");
    return await response.json();
}
// get a single character

//get all planets
async function getAllPlanets() {
    // converts response from api to real usable json
    const response = await fetch("https://swapi.py4e.com/api/planets");
    return await response.json();
}

// get a single planet

//get all vehicles
async function getAllVehicles() {
    const response = await fetch("https://swapi.py4e.com/api/vehicles");
    return await response.json();
}


function renderVehicles() {
    wrapper.innerHTML = "";
    getAllVehicles().then((response) => {
        response.results.forEach((i) => {
            renderSingleVehicles(i)
        })
    })
}

// get a single vehicle

//get all species
async function getAllSpecies() {
    const response = await fetch("https://swapi.py4e.com/api/species");
    return await response.json();
}



// get a single species

// this section renders the elements of the specific data. ensure that only one set of data is shown at a time
//render characters
function renderCharacters() {
    wrapper.innerHTML = "";
    getAllCharacters().then((response) => {
        response.results.forEach((i) => {
            renderSingleCharacter(i)
        })
    })
}

// render planets
function renderPlanets() {
    wrapper.innerHTML = "";
    getAllPlanets().then((response) => {
        response.results.forEach((i) => {
            renderSinglePlanet(i)
        })
    })
}

// render vehicles
function renderVehicles() {
    wrapper.innerHTML = "";
    getAllVehicles().then((response) => {
        response.results.forEach((i) => {
            renderSingleVehicles(i)
        })
    })
}

// render species
function renderSpecies() {
    wrapper.innerHTML = "";
    getAllSpecies().then((response) => {
        response.results.forEach((i) => {
            renderSingleSpecies(i)
        })
    })
}

// render single character
function renderSingleCharacter(info) {
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    nameEle.innerHTML = info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

    ele.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSingleCharacter(info)
    })
}

// render single planet

function renderSinglePlanet(info) {
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    nameEle.innerHTML = info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

//     click to grab single planet info

    ele.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSinglePlanet(info)
    })
}

// render single vehicle
function renderSingleVehicles(info) {
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    nameEle.innerHTML = info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

    ele.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSingleVehicles(info)
    })
}

// render single species
function renderSingleSpecies(info) {
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    nameEle.innerHTML = info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

    ele.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSingleSpecies(info)
    })
}

// render single species

// have a menu that allows a user to navigate between the different lists of data

// click on a button to render all the planets
document.getElementById("all").addEventListener("click", ()=>{
    renderPlanets()
    renderCharacters();
    renderVehicles();
    renderSpecies();
})


document.getElementById("planets").addEventListener("click", ()=>{
    renderPlanets()
})

document.getElementById("people").addEventListener("click", ()=>{
    renderCharacters()
})

document.getElementById("species").addEventListener("click", ()=>{
    renderSpecies()
})

document.getElementById("vehicles").addEventListener("click", ()=>{
    renderVehicles()
})

// allow a user to return to the "all X" listing from a single item page where x is the data set the single item belongs to

// initialize application
renderPlanets();
renderCharacters();
renderVehicles();
renderSpecies();

// BONUS: Figure out how to page between the different listings of data

// BASE API https://swapi.py4e.com/api/

// API Documentation https://swapi.py4e.com/documentation#intro



