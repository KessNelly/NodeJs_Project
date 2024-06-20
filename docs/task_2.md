# Task_1
Write unit tests to test the previous task

- The program should handle gracefully the situation where the file doesn't exist, showing that the file doesn't exist.

- It should run on a randomly different port if the assigned port is in use.

?? if a wrong content type is attached

- Response should be in text/plain if it throws an error

## Dependencies
Jest

## Steps
- Research on the concept of unit testing

- Research on implementation of unit testing with Jest

- Install Jest as a dev dependency for the unit testing as well as supertest to be used alongside Jest to mock http request to the server using "npm install --save-dev jest" and "npm install --save-dev supertest" respectively.

- In the package.json file, under scripts, for "test", write "jest"

- Create a folder called test and in it create a file named "index.test.js" which will contain the test for the codes in index.js

- In the test file, require the modules as done in index,js as well as supertest

- Write tests to ensure that the file path is correct, the server starts and closes before and after each instance, the correct file type is provided when the route is called as well as test for error handling.

- Run test using the command, "npm run test"

- Run Test and fix any failures.
