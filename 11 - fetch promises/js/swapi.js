const swapiUrl = "https://swapi.dev/api/planets/3/?format=json";

fetch(swapiUrl)
    .then( response=>response.json() )
    .then( displayPlanet );

function displayPlanet(planetObj){
    console.log(planetObj);
    console.log(planetObj.climate, planetObj.terrain, planetObj.name);

    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.innerText = planetObj.name;
    p.innerText = `Climate: ${planetObj.climate}, Terrain: ${planetObj.terrain}`
    document.body.append(h1, p);
}