# Bash Reference

What is [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))?

CodeAcademy also has a great one hour course about using the [command line](https://www.codecademy.com/en/courses/learn-the-command-line) effectively.

## Relative path system

Many BASH commands will accept file system paths as a parameter. Paths can be specified as either *absolute* or *relative*:
  1. If you begin the path with `/` then the specified path will be interpreted as **absolute** I.E *relative* to the **root** of your filesystem.
    + **Example**: `mkdir /home` will be interpreted as: *create a directory called "home" inside the* ***root*** *directory*
    + **Example**: `cd /documents/projects/makersquare` will be interpreted as: *change directory to a folder called "MakerSquare" inside of a folder called "projects" inside of a folder called "documents" inside of the* ***root*** *folder*

  2. If you begin the path with `.` then the specified path will will be interpreted as **relative** to the current working directory. You can think of `.` as simply being replaced at execution-time with the output of the `pwd` command specified in the commands section below --- don't worry if you don't understand this right away, just focus on understanding the example below.
    + **Example**: If the current working directory is: `/documents/projects/makersquare` then the command `mkdir ./makerprep_project` will create a new folder called "makerprep_project" at the path `/documents/projects/makersquare/makerprep_project`. In other words, `mkdir ./makerprep_project` is interpreted as `mkdir /documents/projects/makersquare/makerprep_project` 
    + **Note**: Generally, the `./` is implied if left out, and `mkdir makerprep_project` will suffice, but its good to understand how `.` works.

## Commands

+ **ls:** Lists all items in the current directory
  + **Usage**: `ls`
+ **pwd:** Print Working Directory. Prints the current directory to the console.
  + **Usage**: `pwd`
+ **cd:** Change Directory. 
  + **Example**: `cd /home` will change the directory to root/home. `cd ./project`, on the other hand, will change the directory to a subdirectory of the current directory called "project". 
  + **Usage**: `cd DIRECTORY_PATH`
+ **mkdir:** Make Directory. Makes a new folder. 
  + **Example**: `mkdir ./new_project` 
  + **Usage**: `mkdir NEW_DIRECTORY_PATH`
+ **rm:** Remove. Removes the specified file. 
  + **Usage**: `rm PATH_TO_FILE` 
  + Try using it to delete a folder. What happened? Try `rm -rf FOLDER_PATH` What happened? How come?
+ **mv:** Move. Moves the specified file. This is also how you rename files.
  + **Usage**: `mv FILE_LOCATION NEW_FILE_LOCATION`
+ **cp:** Copy. Copies the specified files.
  + **Usage**: `cp FILE_LOCATION NEW_FILE_LOCATION`

  ## Additional Learning

  If you want to learn a lot more about using the Command Line Interface (CLI) and BASH scripting, [this](http://cli.learncodethehardway.org/book/) is a fantastic place to start