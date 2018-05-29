# Valeet Technical Exercise

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


## Technical questions

1. How long did you spend on the coding test? What would you add to your solution if you had more time?

I've spent 30 hours doing the test. 5 hours in the API and the rest of the time I have spent on both the front and the docker images.


- TESTS! I had no time left. I always develop both code and tests but I had to sacrifice them.
- Git hooks to avoid uploading code that does not comply with the "flashlight" rules.
- Change between more than one character. He would have done this either with eyelashes or with a dropdown.
- Manage properly expiration token
- REST API parameters such as fields, sort, filter and their implementation in the front.


2. What was the most useful feature that was added to the latest version of your chosen language? Please include a brief snippet of code that shows how you've used it.

The most outstanding feature of Javascript in its latest versions is the new methods for handling arrays. `.map`, `.filter`, `.some`, `every`, are always magic when working with arrays.

I have used then to transform Marvel API responses into smaller responses.

```javascript
{
  results: data.data.results.map(comic => ({
    id: comic.id,
    title: comic.title,
    digitalId: comic.digitalId,
    thumbnail: comic.thumbnail,
    description: comic.description,
  }))
}
```


3. How would you track down a performance issue in production? Have you ever had to do this?

The first thing would be to emulate the production environment in a safe place (probably in a pre-production environment).

Once the problem has been reproduced, I would have the context of when it occurs, which would allow me to isolate the pieces that may be causing it. First of all, I'd look at static. Are they optimized for the environment? The next step would be to locate possible pieces of code that could cause problems.

I would try to gradually discard parts that could cause problems, and use specific tools to monitor the memory if I could not isolate the particular part that failed.

To date I have had to fix bugs that have appeared in production, I have not yet had to fix any performance failures.


4. Please describe yourself using JSON.

```json
{
  "name": {
    "title": "mr",
    "first": "Paco",
    "last": "Quesada Muñoz"
  },
  "gender": "male",
  "location": {
    "street": "Calle Ampurdan 12",
    "city": "Leganés",
    "state": "España",
    "postcode": 28915
  },
  "birthdate": "05/19/1993",
  "email": "pacoquesmun@gmail.com",
  "phone": "+34650587240",
  "pet": {
    "name": "Kika",
    "specie": "dog",
    "breed": "none"
  },
  "languages": {
    "spanish": "NATIVE",
    "english": "MEDIUM"
  },
  "sports": [
    "swimming",
    "workout"
  ],
  "hobbies": [
    "films",
    "comics",
    "videogames"
  ],
  "socialNetworks": [
    {
      "name": "TWITTER",
      "url": "https://twitter.com/totegsito"
    },
    {
      "name": "FACEBOOK",
      "url": "https://www.facebook.com/paquillo.quesadamunoz"
    },
    {
      "name": "LINKEDIN",
      "url": "www.linkedin.com/in/francisco-quesada-muñoz"
    }
  ]
}
```
