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

## Level Streaming Volumes

Level Streaming Volumes are used to aid in the Level Streaming process. 
They provide a simple way to encapsulate a level, as well as control when it streams in and out of memory, based on when a Player enters or exits the Volume.

<br>

**Volume-based level streaming works as follows :** each streaming Level can have associated with it a set of Level Streaming Volumes. 

Each frame, the engine iterates over each Level and checks to see if the player's viewpoint is inside any of the Level Streaming Volumes associated with that Level. 

If the viewpoint is inside at least one Level Streaming Volume, a request is issued to begin loading that Level. If the viewpoint is outside all Level Streaming Volumes, the Level is marked for unloading.

<br>

#### Important Details

- All Level Streaming Volumes must exist in the persistent Level. Level Streaming Volumes that live in other Levels cannot be used for level streaming, and will generate **warnings** when the map is checked for errors.

- If a Level has any streaming volumes associated with it, other methods of streaming the Level will not behave correctly.

- A single Level Streaming Volume can affect multiple Levels. Similarly, a single Level can be affected by multiple Level Streaming Volumes.

- Volume-based streaming works for split screen. The viewpoints of all local players are considered before any loading/unloading requests are issued.

<br>

### How to Setup

1. first you will need to add a Levelstreaming volume in your scene

 <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Volume.png">
 </p>

2. Then set it to the walkable area of your game, and set the **Streaming Usage** to *"SVB Visibility Blocking on Load"*

  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Volume%20Setup.png">
 </p>

 3. Go to the levels window that we saw above *(point 2 of "How to make it happen")*, and go to the details panel

  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Volume%20Setup%202.png">
 </p>

4. In the details panel set the volume for the sub-scenes you wish to load with that volume

  <p align="center">
   <img src="https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Volume%20Details.png">
 </p>

5. Looks like this

![LS Volume Showcase](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/LS%20Volume%20Showcase.gif)


## Now In C++

After creating your different levels and adding them to the persisstent level like seen above : 

1. Create an actor C++ class *(call it whatever you want, "LevelStreamingActor" is a good one)*

2. In the **.h** file, declare an *OverlapVolume* that is *VisibleAnywhere*, *BlueprintReadOnly*, and has the *AllowPrivateAccess* meta flag : 

```
private:
     // Overlap volume to trigger level streaming
     UPROPERTY(VisibleAnywhere, BlueprintReadOnly, meta = (AllowPrivateAccess = "true"))
     UBoxComponent* OverlapVolume;
```

3. In the **.cpp** file, in the *LevelStreamerActor constructor*, create the *OverlapVolume* and make it the *RootComponent* : 

```
OverlapVolume = CreateDefaultSubobject<UBoxComponent>(TEXT("OverlapVolume"));
RootComponent = OverlapVolume;
```

4. In the **.h** file, declare a protected *OverlapBegins* function, which will be bound to the *BoxComponent's OnComponentBeginOverlap* function. This binding means that *OverlapBegins* must be tagged with a *UFUNCTION* macro, and must have the same signature as *OnComponentBeginOverlap* : 

```
protected:
     UFUNCTION()
     void OverlapBegins(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult & SweepResult);
```

5. Still in the **.h** file, create a protected FName variable that is EditAnywhere called LevelToLoad. This will enable you to change the LevelToLoad on a per-instance basis :

```
UPROPERTY(EditAnywhere)
FName LevelToLoad;
```

6. In the **.cpp** file, include the *GameplayStatics* Library : 

```
#include "Kismet/GameplayStatics.h"
```

7.  Still in the **.cpp** file, begin defining the function. You can use the GameplayStatics function `GetPlayerCharacter` to get the Character at index 0 : 

```
void ALevelStreamerActor::OverlapBegins(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult & SweepResult)
{
      ACharacter* MyCharacter = UGameplayStatics::GetPlayerCharacter(this, 0);
}

```

8. After getting MyCharacter, check it against the OtherActor overlapping your BoxComponent. Also, verify that LevelToLoad is not empty, then call LoadStreamLevel.

```
if (OtherActor == MyCharacter && LevelToLoad != "")
{
    FLatentActionInfo LatentInfo;
    UGameplayStatics::LoadStreamLevel(this, LevelToLoad, true, true, LatentInfo);
}
```

9. In your LevelStreamerActor constructor, bind OverlapBegins to your BoxComponent's OnComponentBeginOverlap.

```
OverlapVolume->OnComponentBeginOverlap.AddUniqueDynamic(this, &ALevelStreamerActor::OverlapBegins);
```





















