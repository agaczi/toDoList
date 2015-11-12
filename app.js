/**
 * Created by Agata on 12.11.2015.
 */
//
//document.addEventListener('DOMContentLoaded', function() {
//    console.log("Działa");                  //dobrze jest zawsze sprawdzac czy dobrze sie zaladowal event przez wpisanie tego


document.addEventListener('DOMContentLoaded', function() {

    var input = document.querySelector("#toDoInput");
    var addButton = document.querySelector("#buttonAdd");
    var listWithTasks = document.querySelector("#listWithTasks");
    var listWithDoneTasks = document.querySelector("#listWithFinishedTasks");
    var removeButton = document.querySelector("#button1");

    addButton.addEventListener('click', function(event) {            //
        //console.log("W inpucie:" + input.value);
        if(input.value.length > 3){

            var newListElement = document.createElement("li");  //ma miec to co wczytujemy z input.value
            var newButton = document.createElement("button") ;           //create element o typie button

            newButton.innerHTML = "Zrobiono";
            newListElement.innerHTML = input.value;

            newButton.addEventListener('click', function(){        //sprawdzam czy dziala
                if(newListElement.parentElement === listWithTasks){
                    newButton.innerHTML ="Cofnij";
                    listWithDoneTasks.appendChild(newListElement);
                }else if(newListElement.parentElement === listWithDoneTasks){
                    newButton.innerHTML ="Zrobiono";
                    listWithTasks.appendChild(newListElement);
                }

                        //newListElement.classList.toggle("taskDone");    //bedzie przekreslal zrobione zadania i odznaczal + ale wtedy musze go ostylowac w css
                        //console.log("Click na guziku");
                        //console.log("Wartość li:" + newListElement.innerHTML); //zapamiętuje jaką wartość newListElement miało w momencie tworzenia tego listenera i ją trzymać

            });

            newListElement.appendChild(newButton);
            listWithTasks.appendChild(newListElement);          //przypinamy ten element do listy

            input.value= "";    //każę mu czyścić okno input czyli zeby wpisywał tam string
        }

        button1.addEventListener('click', function(event){
            listWithDoneTasks.innerHTML = "";
        });
    });
});

