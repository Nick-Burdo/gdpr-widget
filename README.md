# GDPR Widget

This is an exclusively educational project and it has nothing to do with the GDPR.
The purpose of this project is to study the following technologies:
- Express
- MongoDB
- Mongoose
- Swagger
- Vue

## Widget Demo Landing Page with Authorization

### API Server

Create Express APP:
```
$ express server --view=pug
```

Install dependencies:
```
$ cd server
server $ yarn
```

Install `Mongoose`, `Bcrypt`, `Passport`, `Passport JWT`, `JSON Web Token`
```
server $ yarn add mongoose bcrypt passport passport-jwt jsonwebtoken
```

Add script `server` to the `/server.package.json`
```
"scripts": {
    ...
    "server": "PORT=3100 DEBUG=server:* npm start"
  }
```
Create config: `/server/config/index.js`.

Create database connection `/server/database/index.js`. Use MongoDB Atlas.

Add databse connection in `/server/app.js` file after line `var app = express();`
```
// /app.js
...
var app = express();

require('./database');
...
```

Create model `Auth` for JWT-authentication: `/models/auth.js`

Create Passport strategy: `/auth/passport.js`

Initialize Passport  in `/app.js` file after database connection
```
// /app.js
...
require('./database');
const passport = require('./auth/passport');
app.use(passport.initialize());
...
```

Create `signUp` router function for User Sign Up: `/routes/api/v1/signUp.js`

Create `login` router function for User Login: `/routes/api/v1/login.js`

Create API router: `/routes/api/v1/index.js`

Add API router to the `/app.js` file:

```
...
const router = require('./routes/api/v1');
...
app.use('/api/v1', router);
...
```


Install Swagger UI:
```
server $ yarn add swagger-ui-express
```

Create Swagger API defintion `/server/swagger.json`. Use [Swagger Constructor](http://editor.swagger.io/)

Add Swagger route to the `/server/app.js`:
```
...
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
...
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
...
```




***NOTE:*** If the property `unique` does not work in the user's scheme (it
is possible to create several users with the same `username`), you need
to do the following:
- Remove all documents from the users collection.
- From the mongo shell, execute the command:
```
db.auths.createIndex({username: 1}, {unique: true})
```

### Front End

#### Create Vue App


Install the Vue CLI, if it is not already installed
```
$ sudo npm install -g @vue/cli@v3.0.0-beta.11
```

Create Vue app
```
$ vue create client
```
Select `Manually select features`, then select:
- `Babel`
- `Router`
- `Vuex`
- `CSS Pre-processor`
- `Linter / Formatter`

Then use default selections.

Create Vue configuration file `/client/vue.config.js`
```
module.exports = {
  devServer: {
    port: 3000,
    proxy: 'http://localhost:3100'
  }
};
```

Correct example app file `/client/src/main.js` (add `router`)
```
import router from './router';
...
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

Install and connect `vuetify`
```
client $ yarn add vuetify
```
```
/* /client/src/main.js */

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

```
```
/* /client/public/index.html */

<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
```

Create Landing page view `/client/src/views/Landing.vue` from Vuetify free
pre-made theme  `parallax template` and add it to the router instead of
the view `Home`.

Create Login view `/client/src/views/Login.vue` and Sign Up view
`/client/src/views/SignUp.vue`, then add them to the router.

