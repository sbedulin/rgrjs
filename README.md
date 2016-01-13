**RGR === React + GraphQL + Relay** 

Using Nodemon

1. `nodemon` will execute `npm start` by default, however it won't recognise scripts in `node_modues/.bin` 
2. `nodemon --exec "npm start"` will work correctly

Using Webpack

1. `node_modules\.bin\webpack -w -d` will run local webpack, `-w` watch for changes, `-d` create sourcemaps
