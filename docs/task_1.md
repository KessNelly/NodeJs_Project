# Task_1
Create a basic web server using NodeJs Http server and get the server to display a simple pdf file when the url is entered in the browser.

## Prerequisites
Node Js


## Steps
- Create a Folder named NodeJs Project

- On the terminal, run 'npm init' to initialize project (and create package.json file).

- Create entry file named "index.js".

- In the entry file,require "http" (for creating the server) and "fs" (to read files). Create and assign a port number.

- Create server using the "http.createServer" function and attach desired pdf file usins "fs.readFile".

- Create the "listen" function for incoming requests, containing the assigned port number to handle the requests as well as a call back function to show that the app is running in the console.

- Run the server on the terminal using "node index.js".

- Go to browser and run "localhost:port number" eg localhost:3000

- Push code to github

## Timeline
2 hours

## DIfficulty Level
Easy

## Lessons
- How to create a simple http server and display a file

- Better understanding of promises/call back functions

- Code Formatting

- Code Documentation
