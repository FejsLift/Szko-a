/*function witaj (imie){
    document.write("Witaj: " + imie);
}
witaj(name);
var name = 'Adrian';


function poleProstokata (a, b){
    var pole = a * b;
    return pole;

}
var szerokosc = prompt("Podaj szerokosc");
var dlugosc = prompt('Podaj dlugosc');
document.write(poleProstokata(szerokosc, dlugosc));

function poleObjetosc (szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = szerokosc * dlugosc * wysokosc;
    var wynik = [pole, objetosc];

    return wynik;
}

console.log(poleObjetosc(2, 3, 4));
var pole = poleObjetosc(2, 3, 10)[0]; //wyciąga pierwszą wartość z tablicy
var objetosc = poleObjetosc(2, 3, 10)[1]; //wyciaga pierwsą wartość z tablicy
console.log(pole);
console.log(objetosc);

var x = prompt ("Podaj wartość", "0 - pole, 1 - objetosc");
var objetosc = poleObjetosc(2, 3, 10)[x]; //x oznacza którą wartość ma pobrać i wyświetlić z tablciy
console.log(objetosc);*/

//napisz skrypt który oblicza obwód, pole koła oraz objętość stozk. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math. User wybiera za pomocą pola radio co chce obliczyc. Dane wprowadza w formularzu. Dane wyświetl w bloku.

//console.log(Math.PI);

function obliczanie (r, h){
    var pi = Math.PI;
    var obwod = 2 * r * pi;
    var pole = r * r * pi;
    var objetosc = 1/3(r * r * pi * h);
    var wynik= [obwod, pole, objetosc];
    return wynik;
}

