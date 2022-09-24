# Tweet-web-app-client-angular

Frontend for Tweet application which uses 

![image](https://user-images.githubusercontent.com/63787026/192088468-d7d11746-4d7b-4111-a051-62f0fbd61863.png)
<br>
![image](https://user-images.githubusercontent.com/63787026/192088544-597221ca-a2e7-495f-aee3-94a04f59923e.png)
<br>
![image](https://user-images.githubusercontent.com/63787026/192088564-13149387-a726-438d-814a-07e9a1c38dc6.png)
<br>
![image](https://user-images.githubusercontent.com/63787026/192088572-40af9021-3dcb-4ea5-99d7-cf56849b4a73.png)
<br>
![image](https://user-images.githubusercontent.com/63787026/192088584-08ee63cf-0faa-4d99-8973-a685cc67978d.png)
<br>
![image](https://user-images.githubusercontent.com/63787026/192088590-ae6dc3cb-524b-488f-b4d0-1354bcd29fbb.png)
<br>


# Dockerize an Angular Application with Nginx

## Stage 1:

FROM – Initializes a new build stage, and sets the latest node image from DockerHub registry as the base image for executing subsequent instructions relevant to the angular app’s configuration. The stage is arbitrarily named as build, to reference this stage in the nginx configuration stage.

WORKDIR – Sets the default working directory in which the subsequent instructions are executed. The directory is created, if the path is not found. In the above snippet, an arbitrary path of usr/local/app is chosen as the directory to move the angular source code into.

COPY – Copies the source files from the project’s root directory on the host machine to the specified working directory’s path on the container’s filesystem.

RUN – Executes the angular build in a new layer on top of the base node image. After this instruction is executed, the build output is stored under usr/local/app/dist/sample-angular-app and the compiled image will be used for the subsequent steps in the Dockerfile.

## Stage 2:

FROM – Initializes a secondary build stage, and sets the latest nginx image from dockerhub registry as the base image for executing subsequent instructions relevant to nginx configuration.
COPY – Copies the build output generated in stage 1 (--from=build) to replace the default nginx contents.

EXPOSE – Informs Docker that the nginx container listens on network port 80 at runtime. By default, the nginx server runs on port 80, hence we are exposing that specific port.

