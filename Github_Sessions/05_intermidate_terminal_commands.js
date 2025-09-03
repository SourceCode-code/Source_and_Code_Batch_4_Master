// ===============================
// Git Terminal Commands - Notes (Intermediate)
// ===============================

//1 git commit -a -m "message" --> this command is a mixture of git add . and git commit -m "meassge" this will directly 
// add the changes to the stagging area 

//2 git reset filepath --> this command will unstage the file without discarding the changes 
//3 git reset --> this command will unstage the  all file without discarding the changes 

/**
 * difference -->
 * git checkout -f               --> restore file to last (latest) commit
 * git stash                    -->temperoly removes the changes to allow to work on other file (you can again bring back the changes )
 * git reset                    -->will not make any chnage in the file just will remove ths from stagging to local
   git reset --hard <commit> -- this command will restore your branch to a specific commit 
 */

//4 git reset --hard <commit id> --> this command will restore your file to a the specific commit 



//5 git revert --> reverts a commit by creating new commit that over rides a orignal commit 

// goodbye

