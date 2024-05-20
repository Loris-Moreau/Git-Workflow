# Unreal Engine Level Streaming

Also check out [World Partition](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Unreal%20Engine/World%20Partition.md) *(usually for larger open worlds but can still be used effectively for smaller ones too)*

## Level Streaming

- The [Official Doc](https://dev.epicgames.com/documentation/en-us/unreal-engine/level-streaming-in-unreal-engine) for UE5

- Level Streaming makes it possible to load and unload map files into memory as well as toggle their visibility during play.
  - This makes it possible to have worlds broken up into smaller chunks so that only the relevant parts of the world are taking up resources and being rendered at any point. 
  - If done properly, this allows for the creation of *very large*, seamless games that can make the player feel as if they are playing within a world that dwarfs them in size.


### How to make it happen

1. Choose a level *(the level you wish to stream in)*

2. at the top click on **Windows** then **Levels** like so :

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Levels%20Tab.png">
 </p>

3. Then either *Add Existing* or *Create a New* level to stream in the Levels window
  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Level%20Dropdown.png">
  </p>

- - like so :
  
  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Level%20Added.png">
  </p>

4. you can switch between levels with this at the bottom right of your editor *(be careful to be on the right level when you make changes)*

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Level%20Switch.png">
 </p>

### Now to load / unload via Blueprint

1. Create an actor blueprint

2. add a box collision *(or whatever you want that will trigger)*

3. add these nodes *(the events can be replaced by any trigger you wish)*

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20LoadUnload%20From%20Blueprint.png">
 </p>

4. Then place the blueprint in your scene *(make sure you are on the persistent scene)*

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Level.png">
 </p>

#### It should look a little something like this

![LS Showcase](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Showcase.gif)
