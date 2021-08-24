# Deal-Demonstrator Frontend

This Project uses the [yarn](https://yarnpkg.com/) package manager.

## Installation

> cd deal-demonstrator \
> yarn

## Running the Development Server

> yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Docker

This Project includes a Dockerfile that requires 2 build arguments to define the needed API URLs.

> HASHED_NAMES_URL - Endpoint that returns a list of random hashed names \
> ENCODE_URL - Endpoint that hashes a given user names

See the included docker-compose.yml for an example setup.  
  
To serve the application using the example docker-compose.yml simply run
> docker-compose up

The app can be reached on port 2000 after the installation and build process is finished.