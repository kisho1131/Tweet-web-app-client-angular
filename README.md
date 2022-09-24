# Tweet-web-app-client-angular

Frontend for Tweet application

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

