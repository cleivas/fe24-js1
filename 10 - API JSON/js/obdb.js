// https://api.openbrewerydb.org/v1/breweries/random
// Visa namnet på bryggeriet i en länk som går till bryggeriets hemsida 

const randomBrewJson = `[{"id":"7b67ad3f-b68c-4fae-af3a-4a3aef7b7f74","name":"Critz Farms Brewing \u0026 Cider Co.","brewery_type":"micro","address_1":"3232 Rippleton Rd","address_2":null,"address_3":null,"city":"Cazenovia","state_province":"New York","postal_code":"13035-9693","country":"United States","longitude":"-75.8746342","latitude":"42.8805302","phone":"3156623355","website_url":"http://www.critzfarms.com","state":"New York","street":"3232 Rippleton Rd"}]`;

const randomBrewObj = JSON.parse(randomBrewJson);
// Namnet
console.log(randomBrewObj[0].name);
const breweryName = randomBrewObj[0].name;

// Urlen till hemsidan
console.log(randomBrewObj[0].website_url);
const webUrl = randomBrewObj[0].website_url;

displayBreweryLink(breweryName, webUrl);


// Sök på bryggerier i sverige och visa länk för alla
// https://api.openbrewerydb.org/v1/breweries?by_country=sweden&per_page=3

const sweBrewJson = `[{"id":"f1855903-dd7f-428d-86bd-14fa054e4771","name":"Bryggerifabriken i Karlskrona AB","brewery_type":"micro","address_1":"Alamedan 10","address_2":"c/o Karlskrona Hotel o Fastigheter AB","address_3":null,"city":"Karlskrona","state_province":"Blekinge","postal_code":"371 31","country":"Sweden","longitude":"15.59114","latitude":"56.15906","phone":null,"website_url":"http://bryggerifabriken.se/","state":"Blekinge","street":"Alamedan 10"},{"id":"fdbb4b87-70d0-4362-834f-502fd5b05feb","name":"Brygghus19","brewery_type":"micro","address_1":"Västra Kajen 8F","address_2":null,"address_3":null,"city":"Karlshamn","state_province":"Blekinge","postal_code":"374 31","country":"Sweden","longitude":"14.86054","latitude":"56.16757","phone":"+46709191950","website_url":"http://www.brygghus19.se/","state":"Blekinge","street":"Västra Kajen 8F"},{"id":"70d54bc5-737f-4e00-9e47-a41584043db7","name":"Byaregårdens Brygghus","brewery_type":"micro","address_1":"Syllinge 18","address_2":null,"address_3":null,"city":"Veddige","state_province":"Halland","postal_code":"432 66","country":"Sweden","longitude":null,"latitude":null,"phone":"+46 705-378336","website_url":"https://byaregardensbrygghus.se/","state":"Halland","street":"Syllinge 18"}]`;

const sweBrewArr = JSON.parse(sweBrewJson);
console.log(sweBrewArr)

for(const breweryObj of sweBrewArr){
    console.log(breweryObj.name, breweryObj.website_url);
    displayBreweryLink(breweryObj.name, breweryObj.website_url)
}

function displayBreweryLink(name, url){
    const aEl = document.createElement('a');
    aEl.innerText = name;
    aEl.href = url;
    aEl.target = 'blank';
    document.body.append(aEl);
}