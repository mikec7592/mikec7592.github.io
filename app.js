console.log('yyyuurrr')

// ///////////////////     Global Variables     \\\\\\\\\\\\\\\\\\\

let currentBox;
let score;
let points = 0
let value; 


// //////////////////    On Page Load    \\\\\\\\\\\\\\\\\\

$(() => {
    createBoard()
    //  note: location.reload is the same as using the refresh button built into browsers
    $('button').on('click', location.reload)

    $('td').on('click', onChoiceClick) 

    $('form').on('submit', onSubmit)
})



// ////////////////     Functions     \\\\\\\\\\\\\\\

const createBoard = () => {
    let amount = 100;

    $('<table><thead><tbody><tr>').appendTo('body')
    $('<form>').appendTo('body')
    $('<div>').attr('id', 'title').text('Jeopardy').append('thead')
    $('<input type ="button" value="Reset" onClick="window.location.reload();">').appendTo('body')

    for (let i = 0; i < 5; i++) {
        $('<tr>').attr('id', amount).appendTo('tbody');
        // This condition is needed in order to keep the columns at 4 while still creating 5 rows.  I recieved help from a friend on figuring out how to get the 4 columns with 5 rows into my loop correctly.
        if(Object.keys(catQuestions)[i] != null) {
            $('<th>').addClass('box').text(Object.keys(catQuestions)[i]).appendTo('thead');
        }
        for(let j = 0; j < 4; j++) {
            $('<td>').addClass('box').attr("id", Object.keys(catQuestions)[j] + " " + amount).text(amount).appendTo('#' + amount);
        }
        amount += 100;
    }
}

const checkScore = () => {
    if (points >= 2000) {
        alert('You have reached the score set for winning!  You can continue playing or hit the reset button at the bottom to start again!')
    } else if (points <= -200) {
        alert('You have lost this round. The board will now be reset. Please try again')
        location.reload()    
    } else {
        alert('Keep playing.  Try to reach 2000 points!')
    }
}



const onChoiceClick  = (event) => {
    console.log(event.currentTarget.id);
    // splitting the previosly assinged id so that its put into an array and both pieces can be accessed seperately.
    let category = (event.target.id).split(' ');
    let name = category[0];
    value = category[1];
    $(event.currentTarget).addClass('selected').text(catQuestions[name][value].Question);
    currentBox = $(event.currentTarget);
    // console.log(value)

      for  (let i = 0; i < Object.keys(catQuestions[name][value].Answers).length; i++) {
        let answer = Object.keys(catQuestions[name][value].Answers)[i];
        let answerValue = Object.values(catQuestions[name][value].Answers)[i].value;
        //  The required attribute forces the user to select an option before continuing on.
        $('<input type ="radio" name="Answers" value="'+ answerValue +'"required>').appendTo('form')
        $('<label for="' + answer +'">').text(Object.keys(catQuestions[name][value].Answers)[i]).appendTo('form')
    } 
    $('<input type="submit" value="Submit" >').appendTo('form')
}

const onSubmit = (event) => {
    event.preventDefault()
    //  this is to capture the value from the selcted radio buttons which is used in the condtional below it
    let $selection = $('input[name = Answers]:checked', 'form').val()

    if($selection === 'true') {
        $(currentBox).removeClass('selected').addClass('correct').text('O')
        points += parseInt(value)
        alert('You were correct!  Current score: ' + points)
    } 
    else {$(currentBox).removeClass('selected').addClass('incorrect').text('X');
        points -= parseInt(value)
        alert('Sorry, looks like that was incorrect. Current score: '+ points)
    }
    // alerting the user of their current score and then removing the elements from the board. (The answers from the last selected box are cleared)
    checkScore()
    $('form').children().remove()
    
}




// //////    OBJECT    \\\\\\\\\\

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
            Question: 'Your body produces this in high quantity in response to a sickness',
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
            Question: 'The state of matter with the highest energy',
            Answers: {
                'Gas': {
                    value: true
                }, 
                'Liquid': {
                    value: false
                }, 
                'Solid': {
                    value: false
                },
        }
    },
        500: {
            Question: 'When compared to an apple hanging in a tree, a rock on the ground would have much less',
            Answers: {
                'Static Energy': {
                    value: false
                }, 
                'Kinetic Energy': {
                    value: false
                }, 
                'Potential Energy': {
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
            Question: 'a^2 + b^2 = c^2 is known as what ',
            Answers: {
                'Polyhedron Formula': {
                    value: false
                },
                'Pythagorean Theorem': {
                    value: true
                },
                'Law of Quadratic Reciprocity': {
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
            Question: 'This anime feratures scouts equipped with swords, zipping around while fighting giant humaanoids',
            Answers: {
                'King Slayer': {
                    value: false
                },
                'Attack on Titan': {
                    value: true
                },
                'God Eater': {
                    value: false
                }
        },
    },
        400: {
            Question: 'This anime features an eldery hero who is partly robotic',
            Answers: {
                 'Inuyashiki ': {
                     value: true
                 },
                 'G Gundam': {
                     value: false
                 },
                 'Hinamatsuri': {
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
            Question: 'In this series you battle a subterranean species called Locust',
            Answers: {
                'The Underground': {
                    value: false
                },
                'Neon Abyss': {
                    value: false
                },
                'Gears of War': {
                    value: true
                },
        },
    },
        500: {
            Question: 'This game featuring an IMPOSTER gained mass popularity in 2020',
            Answers: {
                'It Lies Below': {
                    value: false
                },
                'Among Us': {
                    value: true
                },
                'Alien Hominid': {
                    value: false
                }
        }
    }
}
}
    
    













