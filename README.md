**RGR === React + GraphQL + Relay** 

Nodemon

1. `nodemon` will execute `npm start` by default, however it won't recognise scripts in `node_modues/.bin` 
2. `nodemon --exec "npm start"` will work correctly
3. ignoring files `nodemon --exec "npm start" --ignore data/schema.json`

Webpack

1. `node_modules\.bin\webpack -wd` will run local webpack, `-w` watch for changes, `-d` create sourcemaps

MongoDB

1. SET MONGO_URL=mongodb://<user>:<password>@<url>
