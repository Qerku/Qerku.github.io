//Lekcje

var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var i = 0;


var los = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", sprawdz);



function sprawdz()
{
    
    if (input.value > 10)
        answer.innerHTML = "Podaj liczbę od 1 do 10!";
    else if (input.value < 1)
        answer.innerHTML = "Podaj liczbę od 1 do 10!";
    else if (input.value < los)
    {
        answer.innerHTML = "Moja liczba jest większa!";
        i += 1;
    }
    else if (input.value > los)
    {
        answer.innerHTML = "Moja liczba jest mniejsza!";
        i += 1;
    }
    else if (input.value == los)
    {
        answer.innerHTML = "WYGRAŁEŚ!";
        button.innerHTML = "Odźwiesz";
        button.addEventListener("click", win);
        function win()
        {
            window.location.reload();
        }
    }
    else
    {
        answer.innerHTML = "Bruh";
    }

    if (input.value <= 10 && input.value >= 1)
    {
        list.innerHTML += i +". " + input.value + "<br>";
    }
    input.value = "";

}