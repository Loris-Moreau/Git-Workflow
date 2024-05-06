# How to smoothly use GitHub and avoid problems

<a name="top"></a>

## Remember to fetch and pull REGULARLY and to always have the editor closed before pulling or pushing *(wait a few seconds for it to properly close)*

If you have any doubts or problems, check with your lead programmer, **_avoid_** resolving git issues yourself.
   > ps: That why we have Programming leads & Asset managers.

#### If you need to work on a file, here is the procedure :

1. Go to GitHub Desktop and fetch.
   - I do recommend closing your editor before fetching to avoid problems.

   ![Fetch Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Fetch%20Ref.png)
   ![Fetch Request Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Fetch%20Request%20Ref.png)
3. If there are files to pull, close your editor and then pull

   ![Pull Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Pull%20Ref.png)

4. Go on the Discord server, find the git channel. Lock for the files you need, if they are free, lock them.
   - example : File_1 : Taken 🛑
   - example : File_1 : Free 🟢

5. If they have been locked for a long time, ping the last person who used them and ask if they’re still working on them. 
   If you can’t find them on the channel but think they may be used, do not hesitate to ping.

6. If the files you need have just been freed, do not forget to pull them.

7. Do your work. And save everything

8. On Github Desktop, discard every file you haven’t locked.

![Discard Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Discard%20Ref.png)

> [!warning]
> - If you’ve opened other files to check things, your editor might consider them modified even if it’s not the case.

8. Fetch and pull *(don’t forget to close your editor)*
   - a. If you are asked to stash your changes, it means that you are trying to pull files that you have also modified,
        check the commit history online *(not locally as you will only have what you’ve already pulled)*.

![Stash Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Stash%20Ref.png)

   - b. If somebody else has modified a file that you have locked, check with them and the leads *(yours & the programming lead)*.

9. If everything seems clean after *sub-step a*. but it‘s still not working, check with the lead programmer. (ps: make sure you don't have a conflict with yourself, yes it can happen, *all hail technology, so smart*)
  
10. In case of merge conflict,
    ${\color{Red}{DO \space NOT \space RESOLVE \space THEM \space BY \space YOURSELF, \space CHECK \space WITH \space THE \space LEAD \space PROGRAMMER \space IMMEDIATELY}}$

![Merge Conflict Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Merge%20Conflict%20Ref.png)

Success look like this : 

![Merge Success Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Merge%20Success%20Ref.png)

> [!caution]
> After an aborted pull due to stash or merge conflict, you may have an incomplete pull, some files went through but not all, trying to pull again like that will only cause a repeat of the problem. 
> You can discard or stash & discard those files before pulling again.

11. Commit your changes (convention further down) and push. 
   - After waiting for the push to complete, go on Discord and free your files.

![Push Ref](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Push%20Ref.png)

### Commits naming convention :

A commit should look like this :

![Commit Ref 1](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Commit%20Ref%201.png)

Types :
- [Add] : added something, 
- - (Feature) : added a feature.
- - (Assets) : added assets, modified map.
- [Feature] : modified a feature.
- [Assets] : modified assets, modified map.
- [Fix] : Fixed a bug.
- [Engine] : modified settings or plugins.
- [Refactor] : Moved or renamed files  (remember to always fix redirectors *(if there are any)*).

>[!note]
> There are many more Types you can use,
>
> Just make sure it's comprehended/Understood by the entire team
>
>*(and talk about it with the programming lead, and the assets manager (if you have one))*.

If a modification changes the way something works drastically and may cascade to other files, add a **“!”** after the [type] and **“BREAKING CHANGE : ”** before the long description.
Like so :

![Commit Ref 2](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Commit%20Ref%202.png)

Affected files should be presented as such :
- (added) file1, file2
- (updated) file3, file4
- (removed) file5, file6

In case of “Assets” or “Refactor” and/or if there are more than 10 affected files, feel free to skip that step.
*(ps: if there are more than 7 modified files you should commit more often)*

<br>
<br>
<br>
<br>

<p align="center">
Good Luck on your journey young padawan, may the goblin lords be with you.
<br>
<br>
[Back to top](#top)
</p>
