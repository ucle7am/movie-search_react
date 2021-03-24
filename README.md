Current build link: https://movie-seacrh.netlify.app/

## App desription
Its singlepage app, allow you to search movies. In first you need to write a movie name in search input, then click on search button.Then my app sends request to imdb api, and when answer was recieved, app parses json movie data into movie cards and shows them to you of error message if it was a bad request.
## What was used
### `create-react-app` 
for maiking this app.
### `redux` 
for controlling the state of app also I use redux-thunks for ajax requests to imdb API.
### `FLUX` 
for every change in UI, state is changes and only after this UI.
### `typescript` 
was added in few componets for testing how it works.
### `jest` 
added few tests for requests and reducer
## Features
### `Pop Up`
for posters if clicked.
### `spinners`
In search area for showing that request was send and wainting answer from imdb Api, and for posters while they loading. 
### `placholder`
for posters if there is no poster.
### `colored rating`
while bigger than 6 will be green, if lower then will be yellow.
### `pagination`