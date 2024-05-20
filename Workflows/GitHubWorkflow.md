# How to smoothly use GitHub and avoid problems

Thanks to [Aenorya](https://github.com/Aenorya "GitHub Link") and [Ewan](https://github.com/Ewan-DuplessisK "GitHub Link") for their help in redacting this.

*& don't forget to comment your work **(All of it)***

## Remember to fetch and pull REGULARLY and to always have your editor closed before pulling or pushing *(wait a few seconds for it to properly close)*

If you have any doubts or problems, check with your lead programmer, ***avoid*** resolving git issues yourself.
   > ps: This is why we have Programming leads & Asset managers.

#### If you need to work on a file, here is the procedure :

1. Go to GitHub Desktop and fetch.
   - *I do recommend closing your editor before fetching to avoid problems.*

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Fetch%20Ref.png">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Fetch%20Request%20Ref.png">
</p>

2. If there are files to pull, make sure your editor is closed and then pull

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Pull%20Ref.png">
</p>

3. Go on the Google Sheets. Look for the files you need, if they are free, lock them.
   - example : File_1 : Taken 🛑 by John Doe
   - example : File_1 : Free 🟢

   - if you are using Discord it is recommended to set up a [git automation](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Discord%20Webnooks.md) to have a channel that receives an automatic message each time a push is made on the branch or branches you choose, it is very useful for keeping everyone up to date

4. If they have been locked for a long time, ask the last person who used them and ask if they’re still working on them.
   - If you can’t find them on the channel but think they may be used, do not hesitate to ask them or the programming lead and/or the asset manager.

6. If the files you need have just been freed, do not forget to pull them.

7. Do your work. And save everything

8. If you create files remember to **add them to the sheet**.

9. On Github Desktop, discard every file you haven’t locked.

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Discard%20Ref.png">
</p>


> [!warning]
> - If you’ve opened other files to check things, your editor might consider them modified even if it’s not the case.


### Merge Conflicts

9. Fetch and pull *(don’t forget to close your editor)*
   - a. If you are asked to stash your changes, it means that you are trying to pull files that you have also modified,
        check the commit history online *(not locally as you will only have what you’ve already pulled)*.
     
<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Merge%20Conflict%20Ref%202.png">
</p>

- - b. If somebody else has modified a file that you have locked, check with them and the leads *(yours & the programming lead and/or the asset manager.)*.

10. If everything seems clean after step *9.a.* but it‘s still not working, check with the lead programmer and/or the asset manager.
    - (ps: make sure you don't have a conflict with yourself, yes it can happen, *all hail technology, so smart*)

11. In case of merge conflict,
    ${\color{Red}{DO \space NOT \space RESOLVE \space \space THEM \space BY \space YOURSELF, \space CHECK \space WITH \space THE \space LEAD \space PROGRAMMER \space AND/OR \space THE \space ASSET \space MANAGER \space IMMEDIATELY}}$


![Merge Conflict](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Merge%20Conflict%20Ref.png)

Success look like this : 

![Merge Success](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Merge%20Success%20Ref.png)

> [!caution]
> After an aborted pull due to stash or merge conflict, you may have an incomplete pull, some files went through but not all, trying to pull again like that will only cause a repeat of the problem. 
> You can discard or stash & discard those files before pulling again.

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Stash%20Ref.png">
</p>

### Disconecting Errors 

12. In case of Disconect

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Disconect%20Ref.jpg">
</p>

- - a. Check your internet connection
  - b. Close & reopen Github Desktop
  - c. hi

13. Commit your changes *(see convention further down)* and push. 
   - After waiting for the push to complete, go on the Sheet and *free your files*.

<p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Git%20Push%20Ref.png">
</p>

<br>

### Commits naming convention :

A commit should look like this :

![Commit Ref 1](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Commit%20Ref%201.png)

#### Types :
- [Add] : added something,
- - (Feat) : added a feature.
- - (Assets) : added assets.

- [Feat] : modified a feature.
- [Assets] : modified assets.
- [Fix] : Fixed a bug.
- [Engine] : modified settings or plugins.
- [Refactor] : Adding comments, Moving or renaming files (remember to always fix redirectors *(if there are any)*).
- [Chore] : When a minor modification is done on something existing
- [wip] : Only in the case that you need to do a temporary commit to change computers or save progress in the middle of something.


> [!note]
> There are many more Types you can use,
>
> Just make sure it's comprehended/Understood by the entire team
>
> *(and talk about it with the programming lead, and the assets manager (if you have one))*.

If a modification changes the way something works drastically and may cascade to other files, add a **“ ! ”** after the [type] and **“ BREAKING CHANGE : ”** before the long description.
Like so :

![Commit Ref 2](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/Commit%20Ref%202.png)


Modified files should be presented as such :
- (added) file1, file2
- (updated) file3, file4
- (removed) file5, file6

In case of “Assets” or “Refactor” and/or if there are more than 10 affected files, feel free to skip that step.

*(ps : if there are more than 7 modified files you should commit more often)*

<br>
<br>
<br>
<br>

<p align="center">
Honestly just be careful & use common sense.
</p>

<br>

<p align="center">
Good Luck on your journey young padawan, may the goblin lords be with you.
</p>
