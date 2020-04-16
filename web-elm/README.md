# Running the app - Dev mode

`elm-live -s ignore.html src/Main.elm -- --output=elm.js`

and

`./node_modules/.bin/webpack-dev-server`

We need webpack to compile the index.js file and import the modules
from "core".
