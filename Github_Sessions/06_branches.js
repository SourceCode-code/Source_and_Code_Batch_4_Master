// what branches on git and why is it nedded 

// if there is a team of 10 automation testors working on same project 
// everyone is working on default / main 
// while everyone try to push some error may occur or some issues maybe face 
// this can cause the code management an issue 


// to avoid this we have a concept in git called as branching

// branch --> branch is a copy of your main or defualt created to make changes 
// pull request --> a request made to merge your branch changes master
// conflict --> confilct is the problem arised when merging changes 
// merging --> process of adding the branch change to master
// review -> the process of checking the changes  added in the pull request 

// branches -->

// how to create a new  branch 

// git checkout -b branchname 

// how to see all the branches already created 

// 1 ui way  
// 2 terminal way  
// to check current branch 
//git branch  --> show the current branch 
//git branch -a --> shows all the branches 

// conditions to create a new branch 
// 1 all your master code must be updated -->  1)git fetch  ,2)git pull origin main 
// 2 now you can create a new branch 

// git pull origin main  --> downlaods all the updates to the local
// git fetch             --> this gets the lastest data of all the branches this doesnt physciall downlaod 

//how to push in branch 
/*
git add .
git commit -m "message"
git push origin Siddhant_Admin
*/

// while creating a branch name should be specfic --> Aakash_Source

//how to push in branch 
/*
git add .
git commit -m "message"
git push origin Siddhant_Admin
*/

// while creating a branch name should be specfic --> Aakash_Source

// how to visit your already created branch 
// git checkout branch name 