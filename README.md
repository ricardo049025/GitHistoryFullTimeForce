# GitHistoryFullTimeForce
This project is developed with Node js (Nest js) for the part of the backend and with React js in the part of the frontend. The main objective of this project is to show the git history commits of itself, using the github api https://developer.github.com/v3/. 

In the project you can find the next two folders:

# Backend
1) To run this project, the first thing is to install the Nest CLI wit the next command from the terminal : npm i -g @nestjs/cli
2) Go to the folder with the command: cd GitHistoryFullTimeForce and to the folder /backend 
3) Install the npm packages with the nex command: npm  install
4) In root folder backend exist an .env file where you can find the variable environment, so the variable "TOKEN" is empty,
   so you need to add the next token: /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/ (remove the slash).
5) Once you have added the token in the Token variable, we have to run up the backend application with the next command: nest start
6) It's important to know that exist one route to get the information about the git history commits: http://localhost:5001/github/commits.
7) You can run the unit tests of the project with the next command: npm run test

# Frontend.
1) For the case of the frontend you need to go to the Frontend folder.
2) Install the npm packages with the command: npm install
3) Run the project with the next command: npm start
4) By default the app is running in the port: 30001

It important to know that you can configure the path, ports, repos to get the information of a repository, you only need to change the value of the environment variables. If you have any doubt, please send me a message to the next email: ricardom0490@gmail.com

