function policzKwoteZaArt(wszystkieart){
    var cenazaart, iloscart, razemart, rezultat;
    cenazaart=1;
    iloscart=wszystkieart;
    razemart=cenazaart*iloscart;
    rezultat=parseInt(razemart);
    return rezultat;
}

var policzCeneZaZnaki = function(wszystkieznaki) {
    var iloscznakow, razemznaki, rezultat;
    var cenazaznak=50;
    iloscznakow=wszystkieznaki/1000;
    razemznaki=iloscznakow*cenazaznak;
    rezultat=parseFloat(razemznaki);
    return rezultat;
};

function razem() {
    var zrodloart=document.getElementById('iloscart').value;
    var zrodloznakow=document.getElementById('znaki').value;
    var calosc=policzKwoteZaArt(zrodloart) * policzCeneZaZnaki(zrodloznakow);
    document.getElementById('wynik').innerHTML= calosc + " zł";
}

    /*Przyciski*/
    
    var guzik, guzik2;
    guzik=document.getElementById('policz');
    guzik2=document.getElementById('usun');

    guzik.addEventListener('click',razem);
    guzik2.addEventListener('click',function (){
    document.getElementById('wynik').innerHTML= "";
});














