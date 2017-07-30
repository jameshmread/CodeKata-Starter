# CodeKata-Starter
C# Starter template for a dotnet core class lib and xunit framework to run a TDD dojo

To Start:

0) Fork the repo if you can, it will mean all users can see different dojos and learn from them
0.1) You should create a different branch for each dojo you do
1) Clone/ fork this repo.
2) Open in a your favourite code editor.
3) In a terminal, navigate to the /test/ directory.
4) Do a dotnet restore to restore the bin and obj directories
5) Running a test should fail the provided sample one.

To Run tests: (ensure you are in the /test directory)
dotnet test

Dojo structure
1) Write a failing test
2) Pass onto the next person
3) Write the minimum amount of code to make all the tests pass
4) When the test(s) pass refactor your code.
5) Repeat.


Troubleshooting

- The test should run and fail the first time you open the project. The test should not fail due to compliation errors.
- Make sure you have the C# extension enabled (VSCode).
- Restore Dependencies when prompted.

Adapted From:
https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test
