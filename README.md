# Mad Labbers Final Project

## To Update Your Version After a Pull Request is Merged

1. add and commit your changes to your current branch (otherwise it'll freak out)
2. git checkout master
3. git pull
4. git checkout (name of your current branch OR -b and name of your new branch)
5. git merge master (if this throws you into VIM mode, just type in :wq and hit enter to escape it)
6. then reopen your branch with code .


## To Actually Merge Your Branch When It's Ready

1. git add and commit and push (to your branch!)
2. go on github and click on the name of your branch
3. create a new PR
4. get someone else to review it and then they can confirm the PR and merge (into master)
5. when we're all ready, we can get everyone to git pull so we all can have the new version of master 
