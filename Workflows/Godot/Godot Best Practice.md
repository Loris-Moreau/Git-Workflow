# These are the [Best practices](https://docs.godotengine.org/en/3.3/getting_started/workflow/best_practices/index.html) for the Godot Engine.

> [!Note]
> The best practices in Godot rely on Object-Oriented design principles.
> 
> We use tools like the [single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle) principle and [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)).


## Applying object-oriented principles in Godot

The engine offers two main ways to create reusable objects : ***scripts and scenes***. 
*Neither of these technically define classes*.

Still, many best practices using Godot involve applying object-oriented programming principles to the scripts and scenes that compose your game. That is why it's useful to understand how we can think of them as classes.

This will briefly explain how scripts and scenes work in the engine's core to help you understand how they work.

## How scripts work in the engine

The engine provides built-in classes like [Node](https://docs.godotengine.org/en/3.3/classes/class_node.html#class-node). You can extend those to create derived types using a script.

These scripts are not technically classes. Instead, they are resources that tell the engine a sequence of initializations to perform on one of the engine's built-in classes.

Godot's internal classes have methods that register a class's data with a [ClassDB](https://docs.godotengine.org/en/3.3/classes/class_classdb.html#class-classdb). This database provides runtime access to class information. ${\color{Red}{ClassDB}}$ contains information about classes like :

- Properties.

- Methods.

- Constants.

- Signals.


This ${\color{Red}{ClassDB}}$ is what objects check against when performing an operation like accessing a property or calling a method. It checks the database's records and the object's base types' records to see if the object supports the operation.

Attaching a Script to your object extends the methods, properties, and signals available from the ${\color{Red}{ClassDB}}$.

> [!Note]
> Even scripts that don't use the *<ins>extends</ins>* keyword implicitly inherit from the engine's base Reference class.
>
> As a result, you can instantiate scripts without the *<ins>extends</ins>* keyword from code. Since they extend *<ins>Reference</ins>* though, you cannot attach them to a [Node](https://docs.godotengine.org/en/3.3/classes/class_node.html#class-node).


## Scenes

The behaviour of scenes has many similarities to classes, so it can make sense to think of a scene as a class. Scenes are reusable, instantiable, and inheritable groups of nodes. Creating a scene is similar to having a script that creates nodes and adds them as children using *add_child()*.

We often pair a scene with a scripted root node that makes use of the scene's nodes. As such, the scene is often an extension of the script's declarative code.


The content of a scene helps to define :

- What nodes are available to the script
- How they are organized
- How they are initialized
- What signal connections they have with each other


Why is any of this important to scene organization ? 
Because instances of scenes are objects. As a result, many object-oriented principles that apply to written code also apply to scenes : 
- single responsibility,
- encapsulation,
- and others.

The scene is always an extension of the script attached to its root node, so you can interpret it as part of a class.

Most of the techniques explained in this best practices series build on this point.
