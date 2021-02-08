console.log('yyyuurrr')

$(() => {
    createBoard()

    $('td').on('click', onChoiceClick) 

    $('form').on('submit', onSubmit)
})

let $form = $('<form/>')
const createBoard = () => {
    let amount = 100;

    $('<table><thead><tbody><tr>').appendTo('body')
    $('<form>').appendTo('body')
    // $('<input type="radio"').appendTo('form')

    for (let i = 0; i < 4; i++){
        $('<tr>').attr('id', amount).appendTo('tbody');
        $('<th>').addClass('box').text(Object.keys(catQuestions)[i]).appendTo('thead');
        for (let j = 0; j < 4; j++) {
            $('<td>').addClass('box').attr('id', Object.keys(catQuestions)[j]+ ' ' + amount).text(amount).appendTo('#' + amount);
        } 
        amount += 100;
    }
}

const fillForm = () => {
    for  (let i = 0; i < Object.keys(catQuestions[name][value].Answers).length; i++) {
        console.log(Object.keys(catQuestions[name][value].Answers)[i])
      $('<input type ="radio" name="Answers" value="catQuestions[name][value].Answers[i]">').appendTo('form')
      $('<label for="catQuestions[name][value].Answers[i]">').text(Object.keys(catQuestions[name][value].Answers)[i]).appendTo('form')

  }
  $('<input type="submit" value="Submit">').appendTo('form')
}


const onChoiceClick  = (event) => {
    console.log(event.currentTarget.id);
    let category = (event.target.id).split(' ');
    let name = category[0];
    let value = category[1];
        
    console.log(catQuestions)
    $(event.currentTarget).addClass('selected').text(catQuestions[name][value].Question);
    // on click radio buttons with answers are sent to a div below the table
                console.log(catQuestions[name][value].Answers.length)
        // $form.appendTo('body')
      for  (let i = 0; i < Object.keys(catQuestions[name][value].Answers).length; i++) {
          console.log(Object.keys(catQuestions[name][value].Answers)[i])
        $('<input type ="radio" name="Answers" value="catQuestions[name][value].Answers[i]">').appendTo('form')
        $('<label for="catQuestions[name][value].Answers[i]">').text(Object.keys(catQuestions[name][value].Answers)[i]).appendTo('form')

    }
    $('<input type="submit" value="Submit">').appendTo('form')
    // answering()
}

const onSubmit = (event) => {
    console.log()
    event.preventDefault()
    $('form').children().remove()
}



// //////    OBJECTS    \\\\\\\\\\

const catQuestions = {
    'science': {
        100: {
            Question: 'Molecular structure of water',
            Answers: {
                'h2o2': {
                    value: false
                },
                 'h20': {
                     value: true
                 }, 
                 'ho2': {
                     value: false
                 }
        }
    },
        200: {
            Question: 'Your body produces this in high quantity when sick',
            Answers: {
                'Red blood cells': {
                    value: false
                }, 
                'White blood cells': {
                    value: true 
                }, 
                'Platelets': {
                    value: false
                },
        }
    },
        300: {
            Question: 'This kind of acid builds up in your body when exercising',
            Answers: {
                'Sulfuric acid': {
                    value: false
                }, 
                'phospherous acid': {
                    value: false
                }, 
                'Lactic acid': {
                    value: true
                },
        }
    },
        400: {
            Question: 'example question',
            Answers: {
                'answer1': {
                    value: true
                }, 
                'answer2': {
                    value: false
                }, 
                'answer3': {
                    value: false
                },
        }
    },
        500: {
            Question: '500 example question',
            Answers: {
                'answer1': {
                    value: false
                }, 
                'answer2': {
                    value: false
                }, 
                'answer3': {
                    value: true
                },
        }
    },
},
    'Math': {
        100: {
            Question: 'You have 2 apples I take away 1 orange. How many apples do you have left?',
            Answers: ['3', '1', '2'],
        },
        200: {
            Question: 'which of the following is a prime number?',
            Answers: ['9', '22', '11'],
        },
        300: {
            Question: 'when operating with numbers which should you do first',
            Answers: ['exponents', 'multiplication', 'division'],
        },
        400: {
            Question: ' ',
            Answers: [' '],
        },
        500: {
            Question: 'What\'s 9 + 10?',
            Answers: ['21', '9', '19'],
        }
    },
    'Anime': {
        100: {
            Question: 'In this anime there are 7 golden spheres to collect',
            Answers: ['Ball Collecting Adventure 2', 'Dragonball', 'Dragon Tails'],
        },
        200: {
            Question: 'This character from naruto is most famous for his signature Rasengan',
            Answers: ['Chidori', 'Sasuke', 'Naruto'],
        },
        300: {
            Question: ' ',
            Answers: [' '],
        },
        400: {
            Question: ' ',
            Answers: [' '],
        },
        500: {
            Question: 'This anime is commonly known as the greatest anime of all time',
            Answers: ['Steins;Gate', 'Steins; Gate', 'Steins; Gate'],
        }
    },
    'videoGames': {
        100: {
            Question: 'A popular battle royale featuring pinatas and building',
            Answers: ['Fork Knife', 'Viva Pinata', 'Fortnite'],
        },
        200: {
            Question: 'Iconic series feturing Master Chief',
            Answers: ['Cooking Mama', 'Pokemon', 'Halo'],
        },
        300: {
            Question: 'This franchise first released in 1986 and features a male hero from the Hylian race. The legend of :',
            Answers: ['Mario', 'Zelda', 'Link'],
        },
        400: {
            Question: ' ',
            Answers: [' '],
        },
        500: {
            Question: ' ',
            Answers: [' ']
        }
    }
}
    
    
// console.log(catQuestions.science)

   
        

// const createBoard = () => {
//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             if (i = 0) {
//                 $('<div>').attr('id', 'CAT1' + j).appendTo('body')
//             } else if (i = 1) {
//                 $('<div>').attr('id','CAT2'+ j).appendTo('body')
//             } else if (i = 2) {
//                 $('<div>').attr('id', 'CAT3' + j).appendTo('body')
//             } else if (i = 3) {
//                 $('<div>').attr('id', 'CAT4' + j).appendTo('body')
//             } else if (i = 4) {
//                 $('<div>').attr('id', 'CAT5' + j).appendTo('body')
//             } 
//         } 
//     }
// }








// const answering = (currentPlayer) => {
//     if (correctAnswer = true) {
//         alert('You were correct.  Chose another question.')
//         // currentPlayer score ++
//     } else {
//         alert('That was incorrect! Next players turn.') 
//         // switch player
//     }
// }
 







// const createBoard = () => {
//     let amount = 100;

//     $('<table><thead><tbody><tr>').appendTo('body')

//     for (let i = 0; i < 4; i++){
//         $('<tr>').attr('id', amount).appendTo('tbody')
//         $('<th>').addClass('box').text(Object.keys(catQuestions)[i]).appendTo('thead')
//         for (let j = 0; j < 4; j++) {
//             $('<td>').addClass('box').attr('id', Object.keys(catQuestions)[j]+ ' ' + amount).text(amount).appendTo('#' + amount)
//         } 
//         amount += 100
//     }
// }



// const createBoard = () => {
//     for (let i = 0; i < 6; i++) {
//         for (let j = 0; j < 6; j++) {
//             switch(i) {
//             case 0: 
//                 $('<div>').attr('id', 'cat' + j).appendTo('#container')
//                 break;
//             case 1:
//                 $('<div>').attr('id', 'science' + j).appendTo('#container')
//                 break;
//             case 2:
//                 $('<div>').attr('id', 'CAT3' + j).appendTo('#container')
//                 break;
//             case 3:
//                 $('<div>').attr('id', 'CAT4' + j).appendTo('#container')
//                 break;
//             case 4:
//                 $('<div>').attr('id', 'CAT5' + j).appendTo('#container')
                        
//             }    
//         } 
//     }
// }


// let player1;
// let player2;

// const onChoiceClick  = (event) => {
//     console.log($(event.currentTarget))
//     $(event.currentTarget).addClass('selected')
//     answering()
// }


// const answering = (currentPlayer) => {
//     if (correctAnswer = true) {
//         alert('You were correct.  Chose another question.')
//         currentPlayer += pointValue 
//     } else {
//         alert('That was incorrect! Next players turn.') 
//         // switch player
//     }
// }
// 