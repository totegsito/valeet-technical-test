# Daredevil Comic App

## Requirements
- [Docker](https://www.docker.com/)
- Change MARVEL_API_KEY and MARVEL_SECRET_KEY keys of `api/.env` file to your own.

## Docker services
- Redis
- Mongo
- Api (node.js)
- Web (React)

## Start Exercise

Run the following command to build and run the services on production environment:
```shell
> docker-compose up --build
```

Note: use `-d` command if you want to run in background (detached mode) `docker-compose up --build -d`. You have to execute `docker-compose down` to stop and remove containers.

When services are up and running, open [`http://localhost:4000/`](http://localhost:4000/) in your browser.

## API Server

The *API server* has been developed in Node.js with [`Express`](http://expressjs.com/es/) framework, [`redis` client](http://redis.js.org/) to connect and handle the cache system and [`axios`](https://github.com/axios/axios) to make http request to Marvel API.

## WEB Server

The *App* has been developed using [`ReactJs`](https://reactjs.org/), [`Redux`](https://redux.js.org/) as the applicaction state manager and [`axios`](https://github.com/axios/axios) for the communication with the API.

I have also used [`Bulma`](https://bulma.io/documentation/overview/start/) as boilerplate.
The client side works as a Single Page Application (SPA).

The character chosen has been Daredevil. It has been hardcoded as initial state of the project inside src/store/superhero.js. The reason for this is related to one of the proposals for improvement described below.
