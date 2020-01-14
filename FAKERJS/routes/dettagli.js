var express = require('express'); // METTERE SEMPRE
var router = express.Router(); // METTERE SEMPRE
const fs = require('fs');
var faker = require('faker');


router.get('/', function(req, res, next) {
 res.send(createFakePerson());
});

function createFakePerson()
{

    let ogg = {persone:[]};  // CREAZIONE OGGETTO JSON
}


for(let i = 0; i<10; i++)
{
 let randomNumber = faker.random.number();//nome libreria. nome metodo. nome dentro il metodo
 let NomeCasuale = faker.name.findName(); 
 let randomEmail = faker.internet.email();
 let randomPhone = faker.phone.phoneNumber();
 let randomImage = faker.image.people();
 let randomAddress = faker.address.country();
 let randomSite = faker.internet.url();
 let randomText = faker.lorem.text();

}

 // dentro l'oggetto person creo l'abbinamento tra variabile vuota: valore libreria
 let person = {
   number:randomNumber,
   name:randomName,
   email:randomEmail,
   phone:randomPhone,
   image:randomImage,
   address:randomAddress,
   site:randomSite,
   text:randomText,
 }
 // pusho ogni volta person dentro il vettore persone dentro l'oggetto ogg
 ogg.persone.push(person);
}
 let data = JSON.stringify(ogg);
 fs.writeFileSync('people.json', data);
 return data;
}

module.exports = router;