# Unreal Engine World Partition

### First what is World Partition

- World Partition is an automatic data management and distance-based level streaming system that provides a solution for large world management.
  
  It stores your world in a single persistent level separated into grid cells and provides you with an automatic streaming system to load and unload those cells based on distance from a streaming source.

  It's hard to compare the two directly as devs have used level streaming in various ways that multiple features in the World Partition workflow solve.
  
  World Partition is **not meant** to replace the old workflow, but gives another option for larger open worlds *(can be used effectively for smaller ones too)*. You can still use the old way if you want in UE5 *(there are no signs of Epic deprecating it)*.

- Data Layers are a system within World Partition used for organizing your Actors into separate layers. These layers can be loaded and unloaded to organize your world.

The [docs](https://docs.unrealengine.com/5.0/en-US/world-partition-in-unreal-engine/) are fairly decent in giving a good overview 

