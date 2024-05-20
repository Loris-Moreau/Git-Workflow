# Unreal Engine Level Streaming

## First What is the difference between [Level Streaming](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Unreal%20Engine/Level%20Streaming.md), [World Partition](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Unreal%20Engine/World%20Partition.md), and data layer ?

- World Partition is an automatic data management and distance-based level streaming system that provides a solution for large world management.
  
  It stores your world in a single persistent level separated into grid cells and provides you with an automatic streaming system to load and unload those cells based on distance from a streaming source.

  It's hard to compare the two directly as devs have used level streaming in various ways that multiple features in the World Partition workflow solve.
  
  World Partition is **not meant** to replace the old workflow, but gives another option for larger open worlds *(can be used effectively for smaller ones too)*. You can still use the old way if you want in UE5 *(there are no signs of Epic deprecating it)*.

- Data Layers are a system within World Partition used for organizing your Actors into separate layers. These layers can be loaded and unloaded to organize your world.

The [docs](https://docs.unrealengine.com/5.0/en-US/world-partition-in-unreal-engine/) are fairly decent in giving a good overview 


## Level Streaming

- The [Official Doc](https://dev.epicgames.com/documentation/en-us/unreal-engine/level-streaming-in-unreal-engine)

- Level Streaming makes it possible to load and unload map files into memory as well as toggle their visibility during play. 
  - This makes it possible to have worlds broken up into smaller chunks so that only the relevant parts of the world are taking up resources and being rendered at any point. 
  - If done properly, this allows for the creation of *very large*, seamless games that can make the player feel as if they are playing within a world that dwarfs them in size.


### How to make it happen

1. Choose a level *(the level you wish to stream in)*


2. at the top click on **Windows** then **Levels** like so :

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Levels%20Tab.png">
 </p>

3. Then either add existing or create a new level to stream in the Levels window
  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Level%20Dropdown.png">
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

