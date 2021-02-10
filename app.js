console.log('yyyuurrr')

let currentBox;
let score;
let points = 0
let value; 
$(() => {
    createBoard()

    $('button').on('click', location.reload)

    $('td').on('click', onChoiceClick) 

    $('form').on('submit', onSubmit)
})



const createBoard = () => {
    let amount = 100;

    $('<table><thead><tbody><tr>').appendTo('body')
    $('<form>').appendTo('body')
    $('<div>').attr('id', 'title').text('Jeopardy').append('thead')
    $('<input type ="button" value="Reset" onClick="window.location.reload();">').appendTo('body')

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
    value = category[1];
    $(event.currentTarget).addClass('selected').text(catQuestions[name][value].Question);
    currentBox = $(event.currentTarget);
    console.log(value)

      for  (let i = 0; i < Object.keys(catQuestions[name][value].Answers).length; i++) {
        let answer = Object.keys(catQuestions[name][value].Answers)[i];
        let answerValue = Object.values(catQuestions[name][value].Answers)[i].value;
        $('<input type ="radio" name="Answers" value="'+ answerValue +'" required>').appendTo('form')
        $('<label for="' + answer +'">').text(Object.keys(catQuestions[name][value].Answers)[i]).appendTo('form')
    } 
    $('<input type="submit" value="Submit" >').appendTo('form')
}

const onSubmit = (event) => {
    console.log()
    event.preventDefault()
    let $selection = $('input[name = Answers]:checked', 'form').val()
    if($selection === 'true') {
        $(currentBox).removeClass('selected').addClass('correct').text('O')
        points += parseInt(value)
        alert('You were correct!  Current score: ' + points)
    } 
    else {$(currentBox).removeClass('selected').addClass('incorrect').text('X');
        alert('Sorry, looks like that was incorrect. Current score: '+ points)
    }

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
            Answers: {
                '3': {
                    value: false
                }, 
                '1': {
                    value: false
                }, 
                '2': {
                    value: true
                },
        },
    },
        200: {
            Question: 'which of the following is a prime number?',
            Answers: {
                '9': {
                    value: false
                }, 
                '22': {
                    value: false
                }
                , '11': {
                    value: true
                },
        },
    },
        300: {
            Question: 'when operating with numbers which should you do first',
            Answers: {
                'exponents': {
                    value: true
                }, 'multiplication': {
                    value: false
                }, 'division': {
                    value: false
                },
        },
    },
        400: {
            Question: ' ',
            Answers: {
                'apple': {
                    value: false
                },
                'mango': {
                    value: true
                },
                'potato': {
                    value: false
                }
        },
    },
        500: {
            Question: 'What\'s 9 + 10?',
            Answers: {
                '21': {
                    value: true
                }, 
                '9': {
                    value: false
                }, 
                '19': {
                    value: false
                },
        }
    },
},
    'Anime': {
        100: {
            Question: 'In this anime there are 7 golden spheres to collect',
            Answers: {
                'Ball Collecting Adventure 2': {
                    value: false
                }, 
                'Dragonball': {
                    value: true
                }, 
                'Dragon Tails': {
                    value: false
                },
        },
    },
        200: {
            Question: 'This character from naruto is most famous for his signature Rasengan',
            Answers: {
                'Chidori': {
                    value: false
                }, 
                'Sasuke': {
                    value: false
                }, 
                'Naruto': {
                    value: true
                },
        },
    },
        300: {
            Question: ' ',
            Answers: {
                'your': {
                    value: false
                },
                'hello': {
                    value: true
                },
                'toes': {
                    value: false
                }
        },
    },
        400: {
            Question: ' ',
            Answers: {
                 'son ': {
                     value: true
                 },
                 'kai ': {
                     value: false
                 },
                 'yyuurr': {
                     value: false
                 }
        },
    },
        500: {
            Question: 'This anime is commonly known as the greatest anime of all time',
            Answers: {
                'Steins;Gate': {
                    value: true
                }, 
                'Steins; Gate': {
                    value: true
                }, 
                'Steins; Gate': {
                    value: true
                },
        }
    },
},
    'videoGames': {
        100: {
            Question: 'A popular battle royale featuring pinatas and building',
            Answers: {
                'Fork Knife': {
                    value: false
                }, 
                'Viva Pinata': {
                    value: false
                }, 
                'Fortnite': {
                    value: true
                },
        },
    },
        200: {
            Question: 'Iconic series feturing Master Chief',
            Answers: {
                'Cooking Mama': {
                    value: false
                }, 
                'Pokemon': {
                    value: false
                }, 
                'Halo': {
                    value: true
                },
        },
    },
        300: {
            Question: 'This franchise first released in 1986 and features a male hero from the Hylian race. The legend of :',
            Answers: {
                'Mario': {
                    value: false
                }, 
                'Zelda': {
                    value: true
                }, 
                'Link': {
                    value: false
                },
        },
    },
        400: {
            Question: ' ',
            Answers: {
                'tinos': {
                    value: false
                },
                'binos': {
                    value: false
                },
                'minos': {
                    value: true
                },
        },
    },
        500: {
            Question: ' ',
            Answers: {
                'ggrrr': {
                    value: false
                },
                'yyuurrr': {
                    value: true
                },
                'skurskur': {
                    value: false
                }
        }
    }
}
}
    
    








// const answering = (currentPlayer) => {
//     if (correctAnswer = true) {
//         alert('You were correct.  Chose another question.')
//         // currentPlayer score ++
//     } else {
//         alert('That was incorrect! Next players turn.') 
//         // switch player
//     }
// }
 





