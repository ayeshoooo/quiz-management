#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Typescript QuizApp Made By Ayesha");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function AskQuestion() {
    const answers = await inquirer.prompt([{
            type: "list",
            name: "questionno1",
            choices: ["FrameWork", "Library"],
            message: " Nextjs is a React??",
        },
        {
            type: "list",
            name: "questionno2",
            choices: ["npm run dev", "npm start"],
            message: "NextJs Start the Server command ",
        },
        {
            type: "list",
            name: "questionno3",
            choices: ["vercel", "firebase"],
            message: "In NextJS which website is best for hosting ",
        }
    ]);
    const marks = 10;
    const fail = 0;
    if (answers.questionno1 === "FrameWork") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answers.questionno2 === "npm run dev") {
        console.log("Answer is correct ");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answers.questionno3 === "vercel") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
}
AskQuestion();
