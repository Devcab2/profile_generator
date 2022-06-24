const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ',(answer) => {
  rl.question("What's your nick name? ", (answer2) => {
    rl.question("What's an activity you like doing? ", (answer3) => {
      rl.question("What do you listen to when you do that? ", (answer4) => {
        rl.question("What's your favorite meal of the day? ", (answer5) => {
          rl.question("What's your favortie thing to eat for that meal? ", (answer6) => {
            rl.question("What's your favorite sport? ", (answer7) => {
              rl.question("What is your super power? ", (answer8) => {
                console.log(`Thanks for your opinion: ${answer} \n nice nickname: ${answer2} \n Thats a fun activity: ${answer3} \n Your fav music is: ${answer4} \n The most important meal is: ${answer5} \n The best food is: ${answer6} \n Cool sport: ${answer7} \n Your super power is: ${answer8}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});




