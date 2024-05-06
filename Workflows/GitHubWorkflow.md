# How to smoothly use GitHub and avoid problems

## Remember to fetch and pull REGULARLY and to always have the editor closed before pulling *(wait a few seconds for it to properly close)*

If you have any doubts or problems, check with your lead programmer, **_do not_** try to resolve git issues yourself.

#### If you need to work on a file, here is the procedure :

1. Go to GitHub Desktop and fetch.
   If there are files to pull, close your editor and then pull

2. Go on the Discord server, find the git channel. Lock for the files you need, if they are free, lock them
   - example : File_1 : Taken 🛑
   - example : File_1 : Free 🟢

3. If they have been locked for a long time, ping the last person who used them and ask if they’re still working on them. 
   If you can’t find them on the channel but think they may be used, do not hesitate to ping.

4. If the files you need have just been freed, do not forget to pull them again.

5. Do your work. And save everything

6. On Github Desktop, discard every file you haven’t locked or just created.
   > [!warning]
   > - If you’ve opened other files to check things, your editor might consider them modified even if it’s not the case.

7. Fetch and pull *(don’t forget to close the editor)*
   - a. If you are asked to stash your changes, it means that you are trying to pull files that you have also modified, check the commit history online *(not locally as you will only have what you’ve already pulled)*
   - b. If somebody else has modified a file that you have locked, check with them and the leads *(yours & the programming lead)*.

8. If everything seems clean after *sub-step a*. but it‘s still not working, check with the lead programmer. (ps: make sure you don't have a conflict with yourself, yes it can happen, *all hail technology, so smart*)
  
9. In case of merge conflict,
    ${\color{Red}{DO \space NOT \space RESOLVE \space THEM \space BY \space YOURSELF, \space CHECK \space WITH \space THE \space LEAD \space PROGRAMMER \space IMMEDIATELY}}$


> [!caution]
> After an aborted pull due to stash or merge conflict, you may have an incomplete pull, some files went through but not all, trying to pull again like that will only cause a repeat of the problem. 
> You can discard or stash & discard those files before pulling again.

10. Commit your changes (convention further down) and push. 
   - After waiting for the push to complete, go on Discord and free your files.

### Commits naming convention :

A commit should look like this :
# Permalink to "Commit ref 1" here

Types :
- [Add] : added something, 
- - (Feature) : added a feature.
- - (Assets) : added assets, modified map.
- [Feature] : modified a feature.
- [Assets] : modified assets, modified map.
- [Fix] : Fixed a bug.
- [Engine] : modified settings or plugins.
- [Refactor] : Moved or renamed files  (remember to always fix redirectors *(if there are any)*).

If a modification changes the way something works drastically and may cascade to other files, add a **“!”** after the type and **“BREAKING CHANGE: description of change”** before the long description.
Like so :
# Permalink "Commit ref 2" here

Affected files should be presented as such :
- (added) file1, file2
- (updated) file3, file4
- (removed) file5, file6

In case of “Assets” or “Refactor” and/or if there are more than 10 affected files, feel free to skip that step.
*(ps: if there are more than 5 modified files you should commit more often)*

Good Luck on your journey young padawan, may the goblin lords be with you.