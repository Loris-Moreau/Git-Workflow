# Revision Control in Unreal with Git

Revision Control is also called Version Control
> [!Note]
> Git Bash or GitHub Desktop will work for this.
> 
> You just need Git on your machine.

## Initialization

1. Create your Unreal Project *(Any way you want BP or C++)*

2. In the bottom right of your editor click on the *"RevisionControl"* Button

![Rev control](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RevisionControl.png)


3. You will be prompted with the window below, select *"Git (beta ver)"*
   - *PS : Most UE functions are in beta, don't worry about it*

![git select](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Git%20Select.png)


4. Then if you haven't created a Git alongside your UE project the *"login window"* will be :

![Login](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Login.png)
- - The "Git Path" is where you installed Git, usually, the path above is the right one.
  - Don't forget to add a .gitingore
  - [ReadMe's](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/ReadMeWorkFlow.md) are optional but always nice to have.
  - Name the initial commit whatever you want.
  - Then click on *"Initialize project with Git"*

<br>

- - Once Unreal finishes its initialisation, click on *"Accept Settings"*

![Login success](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Login%20Succes.png)


## Usage

Now if you create a file it will look like this :

![New file](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20New%20File%20Create.png)


Once you save it, it will look like so :

![New file Saved](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20New%20File%20Save.png)


The question mark means it isn't saved locally and the check mark indicates that it is scheduled for addition

![New file Saved](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20New%20File%20Waiting.png)


#### Submit files to revision control

To add *("Submit")* files, click on the *"RevisionControl"* Button, and then on the *"Submit Content"* Button

![New file Saved](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Submit%201.png)


This will appear, and to submit you have to add a description

![New file Saved](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Submit%202.png)


You can describe your commit like so *(or use the [commit convention](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/GitHubWorkflow.md#commits-naming-convention-))* :

![New file Saved](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20Submit%203.png)


This message will apear to tell you it succeeded :

![Commit succes](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/RC%20UE%20Commit%20Log.png)


## What else can you do ?









