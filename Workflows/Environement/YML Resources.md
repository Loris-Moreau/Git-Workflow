# YML Resources : 

- [game.ci](https://game.ci/)
- [Unreal Containers](https://unrealcontainers.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)


# What is a container ?

[Mathieu Duperré](https://www.linkedin.com/pulse/little-history-containers-introduction-gaming-industry-duperr%C3%A9) explains this quite well.

A container is a standard unit of software that packages up code and all its dependencies so the application runs *quickly* and *reliably* from one computing environment to another. 
A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Container images become containers at runtime. 
Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the infrastructure. 
Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging.


## Containers Vs Virtual Machines

![Containers Vs VM](https://github.com/Loris-Moreau/Git-Workflow/blob/main/Workflows/Images/ContainersVsVM.png)

#### CONTAINERS
Containers are an abstraction at the app layer that packages code and dependencies together. 
Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space. 
Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and Operating systems.

#### VIRTUAL MACHINES
Virtual machines (VMs) are an abstraction of physical hardware turning one server into many servers. 
The hypervisor allows multiple VMs to run on a single machine. 
Each VM includes a full copy of an operating system, the application, necessary binaries and libraries.
