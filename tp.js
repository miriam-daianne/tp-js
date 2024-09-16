function dramasDatas(){

    // número de dramas por país -----------------------------------------------------------------------------

    let country = document.querySelectorAll('tbody td.mdl-style-col-country');

    let southKoreaNum =0;
    let japanNum  =0;
    let chinaNum =0;
    let hongKongNum =0;
    let thailandNum =0;
    let philppinesNum =0;
    let taiwanNum =0;


    for(let i = 0; i < country.length; i++){

        if(country[i].textContent == "South Korea"){
            southKoreaNum++;
        }else if(country[i].textContent == "Japan"){
            japanNum++;
        }else if(country[i].textContent == "China"){
            chinaNum++;
        }else if(country[i].textContent == "Hong Kong"){
            hongKongNum++;
        }else if(country[i].textContent == "Thailand"){
            thailandNum++;
        }else if(country[i].textContent == "Philippines"){
            philppinesNum++;
        }else{
            taiwanNum++;
        }
    }


    //  número de dramas por ano --------------------------------------------------------------------------------------

    let years = document.querySelectorAll('.mdl-style-col-year');

    let yearsArray =[];

    for(let i = 0; i < years.length; i++){

        let year = parseInt(years[i].textContent);

        yearsArray.push(year);
    }

    let objYearData = {};
    

    for(let i = 0; i <yearsArray.length; i++){
        let yearValue = yearsArray[i];


        if(objYearData[yearValue]){
            objYearData[yearValue]++;
        }else{
            objYearData[yearValue] = 1;
        }
        
    }
    let lineYearsData = [];

    for(let key in objYearData){
        lineYearsData.push({year: key, num: objYearData[key]});
    }


    // número de dramas por tipos ------------------------------------------------------------------------------------

    let typeDrama = document.querySelectorAll('tbody td.mdl-style-col-type');

    let dramaNum = 0;
    let movieNum =0;
    let DramaSpecialNum =0;

    for(let i = 0; i < typeDrama.length; i++){

        if(typeDrama[i].textContent == 'Drama'){
            dramaNum++;
        } else if(typeDrama[i].textContent == 'Movie'){
            movieNum++;
        }else{
          DramaSpecialNum++;
        }
    }


    //  número de notas

    let lines= document.querySelectorAll('tbody tr');

    let ten = 0;
    let ninepoint = 0;
    let nine = 0;
    let eightpoint = 0;
    let eight = 0;
    let sevenpoint = 0;
    let seven = 0;
    let sixpoint = 0;
    let six = 0;
    let fivepoint = 0;
    let five = 0;
    let fourpoint = 0;
    let four = 0;
    let threepoint = 0;
    let three = 0;
    let twopoint = 0;
    let two = 0;
    let onepoint = 0;
    let one = 0;
    let zeropoint = 0;
    let zero = 0;


    for(let i = 0; i < lines.length; i++){

        let score = lines[i].querySelectorAll('span.score');

        for( let j = 0; j < score.length; j++){

            if(score[j].textContent == '10'){
                ten++;
                lines[i].style.backgroundColor = '#B9D2D7';

            }else if(score[j].textContent == '9.5'){
                ninepoint++
                lines[i].style.backgroundColor = '#CEE1E7';

            }else if(score[j].textContent == '9.0'){
                nine++;
                lines[i].style.backgroundColor = '#CEE1E7';

            }else if(score[j].textContent == '8.5'){
                eightpoint++;
                lines[i].style.backgroundColor = '#DDE8EC';

            }else if(score[j].textContent == '8.0'){
                eight++;
                lines[i].style.backgroundColor = '#DDE8EC';

            }else if(score[j].textContent == '7.5'){
                sevenpoint++;
                lines[i].style.backgroundColor = '#EAEFF5';

            }else if(score[j].textContent == '7.0'){
                seven++;
                lines[i].style.backgroundColor = '#EAEFF5';

            }else if(score[j].textContent == '6.5'){
                sixpoint++;
                lines[i].style.backgroundColor = '#EAEFF5';

            }else if(score[j].textContent == '6.0'){
                six++;
                lines[i].style.backgroundColor = '#EAEFF5';

            }else if(score[j].textContent == '5.5'){
                fivepoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '5.0'){
                five++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '4.5'){
                fourpoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '4.0'){
                four++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '3.5'){
                threepoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '3.0'){
                three++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '2.5'){
                twopoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '2.0'){
                two++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '1.5'){
                onepoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '1.0'){
                one++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '0.5'){
                zeropoint++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }else if(score[j].textContent == '0.0'){
                zero++;
                lines[i].style.backgroundColor = '#FDEDE0';

            }
        }

    }


    let objData = {
        countryDatas:[
            {name:'South Korea', num: southKoreaNum },
            {name:'China', num: chinaNum },
            {name:'Japan', num: japanNum },
            {name:'Hong Kong', num: hongKongNum },
            {name:'Thailand', num: thailandNum },
            {name:'Philipines', num: philppinesNum },
            {name:'Taiwana', num: taiwanNum }
        ],
        yearDatas:[
            {}
        ],
        typesDramas: [
            {type:'Drama', num:dramaNum},
            {type:'Movie', num:movieNum},
            {type:'Drama Special', num:DramaSpecialNum}
        ],

        scoreDatas: [
            {score: '10.0', num:ten},
            {score: '9.5', num:ninepoint},
            {score: '9.0', num:nine},
            {score: '8.5', num:eightpoint},
            {score: '8.0', num:eight},
            {score: '7.5', num:sevenpoint},
            {score: '7.0', num:seven},
            {score: '6.5', num:sixpoint},
            {score: '6.0', num:six},
            {score: '5.5', num:fivepoint},
            {score: '5.0', num:five},
            {score: '4.5', num:fourpoint},
            {score: '4.0', num:four},
            {score: '3.5', num:threepoint},
            {score: '3.0', num:three},
            {score: '2.5', num:twopoint},
            {score: '2.0', num:two},
            {score: '1.5', num:onepoint},
            {score: '1.0', num:one},
            {score: '0.5', num:zeropoint},
            {score: '0.0', num:zero},
        ]


    }

    return objData; 
}

dramasDatas();