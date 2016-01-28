# Lesson Plan 18: Git

## First Things First: The Terminal

### Terminal Commands Review

* *pwd* present working directory (displays where you are currenty located in the file system)
* *ls* list current directory contents
* *cd* change directory (move into another folder)
  * Ex. *cd algorithms* changes to the algorithms folder
  * Ex. *cd ..* changes to the parent directory ("..") 
* *open* opens the file in Finder
  * Ex. *open coderbyte* while in the parent directory of coderbyte, opens the coderbyte file
  * Ex. *open .* while in the file you want to open, opens that file

## Now on to the Main Event: Git

### What is Git?
* Git is a free and open source distributed version control system for programming projects
* Command-line tool (you use it in your Terminal)
* Like an advanced version of saving documents

### Benefits
* Save changes
* Revert to previous changes
* Save all projects to "the cloud"
* View all versions and complete history of a project
* Multiple users can contribute to the same project

### What is GitHub?
* GitHub is a website that hosts git repositories (more on repositories later)
* Git and GitHub are *separate* - you can use git without using GitHub (there are other websites such as GitLab, etc.)
* Git takes all of the features of git and adds new features:
  * Web interface
  * Access control
  * Wikis
  * Feature requests

### Important Terms
* *Terminal/command line*: a tool which allows you to type text commands to perform specific tasks instead of using the mouse to point and click on menus/buttons
* *Repository (repo)*: where the history of your work is stored
* *Clone*: a copy of a repository (i.e. clone GitHub repository to your local computer)
* *Fork*: your own copy of someone else's repository, where you would make diverging changes
* *Branch*: essentially a fork of your own repository
  * Allows you to work on multiple features at once without fear of affecting your working master branch
* *Commit*: each "hard save" of your work; a repository shows the history of all commits

### Getting Started with Git (type these commands into your terminal)
* Install Git for the first time
```
git
```
* Configure your environments so your git commits have your name/email
```
git config --global user.name "Lana Del Rey"
git config --global user.email lana.del.rey@gmail.com
```
* Create a local version of a repository on GitHub
```
git clone https://github.com/beyonce/algorithms.git
```

### Create a Repository in GitHub
* Go to your GitHub profile page
* At the top of the page, click "+" to create new repository
  * Initialize: YES
* Clone -> Copy to Clipboard
* Terminal: *git clone* (+ the URL in clipboard)
* Terminal: *open .*
* Drag the folder to your Sublime
* Right-click repo name to add new file
* Make a change to the file and save

### Git Commands
* Check what branch you are currently in
```
git branch
```
* Create a new branch
```
git checkout -b "your-new-branch-name-here"
```
* Move into a new branch
```
git branch "branch-destionation-name-here"
```
* Check what has changed
```
git status
```
* Add the changed files to the "staging area" to be committed
```
git add .
```
* Create a commit
```
git commit
```
* Write the commit message (press "i" to start typing) then esc + :wq ("write quit")
```
(commit message, esc, :wq)
```
* Pushes commits to your GitHub
```
git push origin master
```
* Get the new changes from GitHub
```
git pull origin master
```

### Navigating GitHub
* Contributions and Commit Streaks
* Organizations
* Followers/Following
* Popular Repos and Starring Repos
* Open Source

### Further Resources
* Git Immersion: http://gitimmersion.com
* YouTube Git: https://www.youtube.com/user/GitHubGuides/featured
* Think Like a Git: http://think-like-a-git.net/sections/about-this/site.html
* Code School's Try Git: https://www.codeschool.com/courses/try-git (Basic course is free, further courses require a subscription)

## Exercise Your Git Skills
```
1. Make a fork of the MakerPrep curriculum (https://github.com/MakerPrepLA/makerprepla)
2. Clone it onto your own machine (make sure you use the URL for your fork, not the original MakerPrep URL)
3. Make a new branch with your name and "lesson 18" (i.e. taylor-swift-lesson-18)
4. Navigate into the lesson_plans/lesson18/gitPractice/yourCohortDateHere folder
5. Add a new file in that folder with your name (i.e. joaquin-phoenix.js)
6. In that file, write a difficult programming problem that you think others would benefit from (can find from CoderByte, etc.)
7. Save and commit the file
8. Push your branch to your GitHub account
9. Make a pull request to the original MakerPrep repository (feel free to add comments, gifs, etc.!)
10. Let an instructor know and we will merge your pull request!
11. Check your GitHub account--you now have activity on your feed! 
```

Enjoy!
