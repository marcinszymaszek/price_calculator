$(document).ready(function () {
    $('#wynik').hide(1);

    $("#pokazukryjkosztorys").click(function () {
        $('#kosztorys').toggle("fast");
        $('#wynik').hide("fast");
    });

    $("#policz").click(function () {
        $('#wynik').show("fast");

    });


    $("#usun").click(function () {
        $('#wynik').hide("fast");

    });

    $("#wynik").click(function () {
        $(this).hide("fast");

    });
});