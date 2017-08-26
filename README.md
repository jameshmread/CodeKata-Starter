# CodeKata-Starter Typescript
Typescript Starter template for a plain typescript class and mocha test runner to run a TDD dojo

To Start:

0) Fork the repo if you can, it will mean all users can see different dojos and learn from them

0.1) You should create a different branch for each dojo you do
1) Clone/ fork this repo.
2) Open in a your favourite code editor (I use VsCode currently.
3) In a terminal, run npm install
4) Running a test should fail the provided sample one.

To Run tests: npm run test
To run testing faster: npm run test:watch (will run tests on saving)
(Good shortcut to know is Ctrl+K, S: this saves all files at once) [VSCODE]

Dojo structure
1) Write a failing test
2) Pass onto the next person
3) Write the minimum amount of code to make all the tests pass
4) When the test(s) pass refactor your code.
5) Repeat.


Troubleshooting

- The test should run and fail the first time you open the project. The test should not fail due to compliation errors.
- If it cannot find modules, make sure you have ran an npm install
- There is no need to transpile to js, mocha runs typescript tests
