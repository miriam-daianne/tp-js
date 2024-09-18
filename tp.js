function dramasDatas() {

    // número de dramas por país -----------------------------------------------------------------------------

    let country = document.querySelectorAll('tbody td.mdl-style-col-country');

    let southKoreaNum = 0;
    let japanNum = 0;
    let chinaNum = 0;
    let hongKongNum = 0;
    let thailandNum = 0;
    let philppinesNum = 0;
    let taiwanNum = 0;


    for (let i = 0; i < country.length; i++) {

        if (country[i].textContent == "South Korea") {
            southKoreaNum++;
        } else if (country[i].textContent == "Japan") {
            japanNum++;
        } else if (country[i].textContent == "China") {
            chinaNum++;
        } else if (country[i].textContent == "Hong Kong") {
            hongKongNum++;
        } else if (country[i].textContent == "Thailand") {
            thailandNum++;
        } else if (country[i].textContent == "Philippines") {
            philppinesNum++;
        } else {
            taiwanNum++;
        }
    }

    //  número de dramas por ano --------------------------------------------------------------------------------------

    let years = document.querySelectorAll('.mdl-style-col-year');

    let yearsArray = [];

    for (let i = 0; i < years.length; i++) {

        let year = parseInt(years[i].textContent);

        yearsArray.push(year);
    }

    let objYearData = {};

    for (let i = 0; i < yearsArray.length; i++) {
        let yearValue = yearsArray[i];

        if (objYearData[yearValue]) {
            objYearData[yearValue]++;
        } else {
            objYearData[yearValue] = 1;
        }
    }

    let lineYearsData = [];

    for (let key in objYearData) {
        lineYearsData.push({ year: key, num: objYearData[key] });
    }

    // número de dramas por tipos ------------------------------------------------------------------------------------

    let typeDrama = document.querySelectorAll('tbody td.mdl-style-col-type');

    let dramaNum = 0;
    let movieNum = 0;
    let DramaSpecialNum = 0;

    for (let i = 0; i < typeDrama.length; i++) {

        if (typeDrama[i].textContent == 'Drama') {
            dramaNum++;
        } else if (typeDrama[i].textContent == 'Movie') {
            movieNum++;
        } else {
            DramaSpecialNum++;
        }
    }

    //  número de notas-----------------------------------------------------------------------------------------------

    let lines = document.querySelectorAll('tbody tr');
    let scoresArray = [];

    for (let i = 0; i < lines.length; i++) {

        let scores = lines[i].querySelectorAll('span.score');

        for (let j = 0; j < scores.length; j++) {

            let score = parseFloat(scores[j].textContent);

            scoresArray.push(score);


            if (score == 10.0) {
                lines[i].style.backgroundColor = '#9DB5CF';
            } else if (score <= 9.5 && score >= 9.0) {
                lines[i].style.backgroundColor = '#B4CBDB';
            } else if (score <= 8.5 && score >= 8.0) {
                lines[i].style.backgroundColor = '#D3E4EB';
            } else if (score <= 7.5 && score >= 5.0) {
                lines[i].style.backgroundColor = '#EDE9E8';
            } else if (score <= 4.5 && score >= 0.0) {
                lines[i].style.backgroundColor = '#DCD1CF';
            }
        }
    }

    let objScoreData = {};

    for (let i = 0; i < scoresArray.length; i++) {
        let scoreValue = scoresArray[i];

        if (objScoreData[scoreValue]) {
            objScoreData[scoreValue]++;
        } else {
            objScoreData[scoreValue] = 1;
        }
    }

    let lineScoreData = [];

    for (let key in objScoreData) {
        lineScoreData.push({ score: key, num: objScoreData[key] });
    }

    lineScoreData.sort((a, b) => a.score - b.score);


    let objData = {
        countryDatas: [
            { name: 'South Korea', num: southKoreaNum },
            { name: 'China', num: chinaNum },
            { name: 'Japan', num: japanNum },
            { name: 'Hong Kong', num: hongKongNum },
            { name: 'Thailand', num: thailandNum },
            { name: 'Philipines', num: philppinesNum },
            { name: 'Taiwan', num: taiwanNum }
        ],
        yearDatas: lineYearsData,
        typesDramas: [
            { type: 'Drama', num: dramaNum },
            { type: 'Movie', num: movieNum },
            { type: 'Drama Special', num: DramaSpecialNum }
        ],

        scoreDatas: lineScoreData
    }

    return objData;
}

dramasDatas();