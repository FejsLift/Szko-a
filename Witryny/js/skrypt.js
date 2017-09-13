/*document.write("skrypt działa poprawnie<br />");
document.write("skrypt działa poprawnie<br />");
document.write("skrypt działa poprawnie<br />");
console.log("text");*/

// var - słowo kluczowe
// imie - nazwa zmiennej
// = - operator przypisania
// Ada - wartość zmiennej
/*console.log(imie);
var imie2 = "Kacper";
document.write(imie2); //Kacper
document.write('test');*/

var imie = "Ada";
//document.write("Witaj, " + imie +  "!"); //Ada

var suma = 10 + 20 + 30;
//console.log(suma);
//alert('TEST');

var a=9;
var b= 'Janusz';
var c= true;
var suma = a + b;
var roznica = a - b;
var mnozenie = a * b;
var dzielenie = a / b;
var modulo = a % b;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c ));

var dzialanie = (7%2)/3;
console.log(dzialanie);
var dziesietna = 10;
var oktalna = 010;
var hex = 0x20
console.log(dziesietna); //10
console.log(oktalna); //8
console.log(hex); //32

console.trace();

//camelCase

var duzaLitera;

var zmienna = 2.5;
console.log(zmienna);
var j1 = '1'; //jedynka jest stringiem, dlatego traktuje ją jak wyraz
var j2=  '1.5';
var wiek = 'Aga';
console.log(typeof(j1));
j1 = parseInt(j1);   //przetwarza stringa na liczbe
//var wynik = j1 + 2;   //12, bo dopisało do wyrazu 1 liczbe 2
j2 = parseFloat(j2);   //przetwarza stringa na liczbe zmiennoprzeciwnkowa
var wynik = j1 + 2;   //3
var wynik1 = j1 + j2;   //2.5,
console.log(wynik);
console.log(wynik1);
wiek = parseInt(wiek); //przetwarza stringa na liczbe
console.log(wiek); //NaN nie jest liczbą, poniważ "Aga" to nie liczba

var x = "ZSK";
//document.getElementById('naglowek').innerHTML = x;
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';

var a = prompt("Podaj liczbe A");
var b = prompt("Podaj liczbe B");
a = parseInt(a);
b = parseInt(b);
var pole = (a+b)/2;
console.log(pole);
var elNaglowek2 = document.getElementById('naglowek2');
elNaglowek2.innerHTML = "Średni wiek wynosi " + pole;



