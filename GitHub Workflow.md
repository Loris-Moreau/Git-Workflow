# How to smoothly use GitHub and avoid problems

## Remember to fetch and pull REGULARLY and to always have the editor closed before pulling *(wait a few seconds for it to properly close)*

### If you have any doubts or problems, check with your lead programmer, **_do not_** try to resolve git issues yourself.

<br>
<br>

If you need to work on a file that has been pushed to the Github repository, here is the procedure:

Go to GitHub Desktop and fetch. Desktop fetches automatically at regular intervals
If there are files to pull, close UE and pull

Go on the Discord server, find the git channel
Look for the files you need, if they are free, lock them
example : BP_Weapon : Taken 🛑
example : BP_Weapon : Free 🟢
If they have been locked for a long time, ping the last person who used them and ask if they’re still working on them
If you can’t find them on the channel but think they may be used, do not hesitate to ping.

If the files you need have just been freed, do not forget to pull them again.

Do your work. And save everything

On Github Desktop, discard every file you haven’t locked or just created.
If you’ve opened other files to check things, UE may consider them modified even if it’s not the case.

Fetch and pull (don’t forget to close UE)
If you are asked to stash your changes, it means that you are trying to pull files that you have also modified, check step 5 again, if it’s good, check the commit history online, (not locally as you will only have what you’ve already pulled). 
If somebody else has modified a file that you have locked, check with them and the leads.






If everything seems clean after sub-step a. but it‘s still not working, check with the lead programmer.
In case of merge conflict, DO NOT RESOLVE THEM BY YOURSELF UNDER ANY CIRCUMSTANCE, CHECK WITH THE LEAD PROGRAMMER IMMEDIATELY !!
After an aborted pull due to stash or merge conflict, you may have an incomplete pull, some files went through but not all, trying to pull again like that will only cause a repeat of the problem. You can discard or stash & discard those files before pulling again.

Commit your changes (convention further down) and push.

After waiting for the push to complete, go on Discord and free your files.

Commits naming convention:

A commit should look like this:



Types:
Feature : added or modified a feature
Fix : Fixed a bug
Engine : modified settings or plugins
Assets : added or modified assets, modified map
Refactor : Moved or renamed files  (remember to always fix redirectors)

If a modification changes the way something works drastically and may cascade to other files, add a “!” after the type and “BREAKING CHANGE: description of change” before the long description.


Affected files should be presented as such:
(added) file1, file2
(updated) file3, file4
(removed) file5, file6

In case of “Assets” or “Refactor”, if there are more than 10 affected files, feel free to skip that step.
Good Luck on your journey young padawan, may the goblin lords be with you.

