//tworzenie tablicy za pomocą literału tablicy

/*var kolory = ["biały", "czerwony", "zielony"];
var elwynik= document.getElementById('wynik');
elwynik.innerHTML = kolory[0];*/

//tworzenie tablicy za pomocą konstruktora tablicy Array

/*var samochody = new Array('BMW', 'Audi', 'Ferrari', 'Fiat');
console.log(samochody[samochody.length-1]);
console.log('ilość elemenów: ' + samochody.length);

var nowy = prompt("Podaj nowy samochód");
samochody[0] = nowy ;
console.log(samochody);*/

//utwórz tablicę o nazwie szkoła, przypisz do niej imie, nazwisko i wiek, o które spytasz ucznia w prompcie. Wyświetl tablice w bloku o nazwie dane.

/*var szkola = new Array();
var eldane = document.getElementById('dane');

var imie = prompt("Podaj imie");
var nazwisko = prompt("Podaj nazwisko");
var wiek = prompt("Podaj wiek");
szkola[0] = imie ;
szkola[1] = nazwisko ;
szkola[2] = wiek ;
console.log(szkola);
eldane.innerHTML = szkola;*/

//tablice wielowymiarowe

/*var tab = new Array(
new Array ('Jan', 'Nowak','Poznań'),
new Array ('Andrzej', 'Kowal','Gniezno'),
new Array ('Krzysztof', 'Kowalski','Warszawa')
);
console.log(tab);
console.log(tab[1][2]);

//sortowanie

var imiona = ["Paweł", "Anna", "Zenon","Jacek"];
console.log(imiona);
var posortowane = imiona.sort(); //sortuje
console.log(posortowane);
var odwroc = posortowane.reverse(); //odwraca sortwanie
odwroc.pop(); //usuwa ostatni wyraz z tablicy
odwroc.push("Gerwazy"); //dodaje na końcu
odwroc.unshift("Joanna"); // dodaje na początku
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); // spradza czy istnieje taka wartość, jesli to ma to jest -1, jeśli jest to podaje indeks
console.log(odwroc.indexOf('Paweł')); //2, bo taki ma indeks

//sortowanie liczb
var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);
cyfry.sort(); //cyfry sortuje patrząc na pierwsze liczby na początku
cyfry.sort(function(a,b){
     return(a-b);       //tylko do cyfr jest stosowane to sortwanie, odejmuje po kolei czy są w dobrej koljności
});
console.log(cyfry);



var elwynik = document.getElementById('wynik'); //div
var elpodajKolor = document.getElementById("podajKolor"); //przycisk
var elkolor = document.getElementById("kolor") //input
var kolor=[];
function zapisz(){
   // console.log(elkolor.value);
    kolor[0]=elkolor.value; //wysyłanie danych do talbicy
    console.log(kolor);
}*/

//zadanie domowe

/*Utwórz formularz z loginem typu text i hasłem (pole typu passowrd) i kolorem heaxadecymalnym (text). Przypisz dane do tablicy jednowymiarowej. Wypisz dane w bloku na stronie w kolorze jaki podał user. Pobierz dane z tablicy.*/

/*var elkolor = document.getElementById('kolor');
var ellogin = document.getElementById('login');
var elhaslo = document.getElementById('haslo');
var dane=[];
function pokaz(){
    console.log(elkolor.value);
    console.log(ellogin.value);
    console.log(elhaslo.value);
    dane[0]=ellogin.value.fontcolor("#" + elkolor.value);
    dane[1]=elhaslo.value.fontcolor("#" + elkolor.value);
    dane[2]=elkolor.value.fontcolor('#' + elkolor.value);
    console.log(dane);
    document.write(dane);

}*/
