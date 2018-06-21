@echo off This is make the bat file to  not show the commands
REM `Rem` do nothing. It is exactly like // in javascript

REM This will start NodeJS without pause the bat
start node app.js

REM delete the command file if it exists
del command

REM Send 3 commands to the file. You can also add parameters
echo list >> command
echo list a b c>> command
echo unlist>> command