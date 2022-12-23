import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import randomInteger from 'random-int';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    const Neon = chalkAnimation.neon("Welcome to the Number Guessing Game\n");
    await sleep();
    Neon.stop();
}
await Welcome();
async function NumberGuessing() {
    let randomNumber = randomInteger(1, 5);
    let start = true;
    while (start) {
        const data = await inquirer
            .prompt([
            {
                name: "Number",
                type: "number",
                message: "Guess a Number From 1 to 5?",
            }
        ])
            .then((answers) => {
            if (answers.Number === randomNumber) {
                console.log("You Guessed a right number");
            }
            else {
                console.log("Try Again");
                start = false;
            }
        });
    }
}
await NumberGuessing();
