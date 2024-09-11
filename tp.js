// function pontuacao (){
//     const score = document.querySelectorAll('tbody span.score');
//         for(let i = 0; i <score.length; i++){
//             if(score[i].textContent >= 8){
//                 score[i].style.backgroundColor = '#D0ABCD';
//             }else if(score[i].textContent >= 6 && score[i].textContent < 8 ){
//                 score[i].style.backgroundColor = '#F3AAB5';
//             }else if(score[i].textContent >= 4 && score[i].textContent < 6 ){
//                 score[i].style.backgroundColor = '#9BAAC9';
//             }else if(score[i].textContent >= 2 && score[i].textContent < 4 ){
//                 score[i].style.backgroundColor = '#C6D8E6';
//             }else if(score[i].textContent >= 0 && score[i].textContent < 2 ){
//                 score[i].style.backgroundColor = '#FDDAE1' }
//         }
//      }

//      pontuacao();


// function teste(){
//     const linhas = document.querySelectorAll('tbody tr');

//     linhas.forEach(linha => {
//         const scores = linha.querySelectorAll('span.score');  // Seleciona os scores dentro da linha atual

//         scores.forEach(score => {
//             const scoreValue = parseFloat(score.textContent);

//             if (scoreValue >= 8) {
//                 linha.style.backgroundColor = '#D0ABCD';
//             } else if (scoreValue >= 6 && scoreValue < 8) {
//                 linha.style.backgroundColor = '#F3AAB5';
//             } else if (scoreValue >= 4 && scoreValue < 6) {
//                 linha.style.backgroundColor = '#9BAAC9';
//             } else if (scoreValue >= 2 && scoreValue < 4) {
//                 linha.style.backgroundColor = '#C6D8E6';
//             } else if (scoreValue >= 0 && scoreValue < 2) {
//                 linha.style.backgroundColor = '#FDDAE1';
//             }
//         });
//     });
// }

// teste();


function teste(){
    const linhas = document.querySelectorAll('tbody tr');

    for(let i =0; i < linhas.length; i++){
        let linha = linhas[i];

        const scores = linha.document.querySelectorAll('span.score');

        for(let j = 0; j < scores.length; i++){
        
        let score = scores [j];

            if(score.textContent >= 8){
                                linha.style.backgroundColor = '#D0ABCD';
                            }else if(score.textContent >= 6 && score[i].textContent < 8 ){
                                linha.style.backgroundColor = '#F3AAB5';
                            }else if(score.textContent >= 4 && score[i].textContent < 6 ){
                                linha.style.backgroundColor = '#9BAAC9';
                            }else if(score.textContent >= 2 && score[i].textContent < 4 ){
                                linha.style.backgroundColor = '#C6D8E6';
                            }else if(score.textContent >= 0 && score[i].textContent < 2 ){
                                linha.style.backgroundColor = '#FDDAE1' }
                        }

        }

    }

    teste();

    // /function teste(){
    //     const linhas = document.querySelectorAll('tbody tr');
    
    //     for(let i =0; i < linhas.length; i++){
    //         let linha = linhas[i];
    
    //         const scores = linha.document.querySelectorAll('span.score');
    
    //         for(let j = 0; j < scores.length; i++){
            
    //         let score = scores [j];
    
    //             if(score.textContent >= 8){
    //                                 linha.style.backgroundColor = '#D0ABCD';
    //                             }else if(score.textContent >= 6 && score[i].textContent < 8 ){
    //                                 linha.style.backgroundColor = '#F3AAB5';
    //                             }else if(score.textContent >= 4 && score[i].textContent < 6 ){
    //                                 linha.style.backgroundColor = '#9BAAC9';
    //                             }else if(score.textContent >= 2 && score[i].textContent < 4 ){
    //                                 linha.style.backgroundColor = '#C6D8E6';
    //                             }else if(score.textContent >= 0 && score[i].textContent < 2 ){
    //                                 linha.style.backgroundColor = '#FDDAE1' }
    //                         }
    
    //         }
    
    //     }
    
    //     teste();
    






