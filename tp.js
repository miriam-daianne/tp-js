function scoreColor(){

    let lines = document.querySelectorAll('tbody tr');

    for(let i = 0; i < lines.length; i++){

        let score = lines[i].querySelectorAll('span.score');

        for( let j = 0; j < score.length; j++){

            if (score[j].textContent >9 && score[j].textContent <=10){
                lines[i].style.backgroundColor = '#B9D2D7';
            }else if(score[j].textContent == 9){
                lines[i].style.backgroundColor = '#CEE1E7';
            }else if(score[j].textContent >=8 && score[j].textContent <9){
                lines[i].style.backgroundColor = '#DDE8EC';
            }else if(score[j].textContent >6 && score[j].textContent <=8){
                lines[i].style.backgroundColor = '#EAEFF5';
            }else if(score[j].textContent >=0 && score[j].textContent <=6){
                lines[i].style.backgroundColor = '#FDEDE0';
            }
        }
    }
}


scoreColor();

function buttons(){
    // let legend = document.querySelector('.mdl-style-list-footer box-footer b-t list-statistics');
    let buttonLegend = document.createElement('button');

    buttonLegend.innerHTML = "Legend";

    buttonLegend.style.backgroundColor = "white";
    buttonLegend.style.borderRadius = "10px";
    buttonLegend.style.border = " solid blue 0.5px";
    buttonLegend.style.padding = "5px";

    // legend.style.display = "flex";

    document.appendChild(buttonLegend);
}

buttons();





