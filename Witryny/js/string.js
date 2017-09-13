var text = "ZSK - Zespół Szkół Komunikacji";
console.log(text.length); //30 znaków

var pierwszyZnak = text.charAt(0); //wyświetla pierwszy zna; zaczynamy lizyć od 0
console.log(pierwszyZnak); //Z; pierwszy znak z zmiennej text


var ostatniZnak = text.charAt(text.length -1); //text.charAt wyświetla znak; liczyć zaczynamy od 0, dlatego robimy -1 bo ostatni znak wyszedłby za ciagiem

console.log(ostatniZnak); //i, ostatni znak ze zmiennej text

var kod = text.charCodeAt(0); //90, pokazuje kod ASCI litery która stoi na miejscu podanym w nawiasie
console.log(kod);

var kod1 = text.charCodeAt(14); //122, mała litera z
console.log(kod1);

//zamiana na duże litery

var duza = text.toUpperCase();
console.log(duza);

//zamiana na małe litery

var mala = text.toLowerCase();
console.log(mala);

var poprawnyTekst = prompt('Podaj imie', 'np. Kowalski');
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase()+ //zamienia pierwszą litere na dużą
poprawnyTekst.slice(1).toLowerCase(); //wycina od 2 znaku i zamienia na małe
console.log(poprawnyTekst);
//substr (od którego znaku, ile znaku) - wycina

var mojeImie = prompt ('Podaj imie');
mojeImie=mojeImie.substr(1, mojeImie.length -2); //wycina pierwszą i ostatnia litere
console.log(mojeImie);
