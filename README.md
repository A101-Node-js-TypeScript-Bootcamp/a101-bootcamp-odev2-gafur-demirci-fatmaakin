
# REST API with Node.js - Boilerplate

In this study, a structure was established by taking category and brand data from Trendyol API with node.js and accessing these data after user registration and login processes.

With the registration process, the user receives an access token, and in order to receive this token, it is necessary to enter data suitable for the validation determined by joi. Then, it can perform the login process from the login url with the token it has obtained and access the relevant data retrieved from the Trenyol API.

The node.js packages used are listed below. You can find the documentation links of the relevant packages at the end of the article.


## Used Technologies

**Client:** Postman

**Server:** Node, Express

**Packages:** Axios, Express, Express-jwt, Jsonwebtoken, Jwt-decode, Nodemon    


## Getting Started
The easiest way to get started is to clone the repository:

#### Get The Latest Snapshot

```bash
  git clone https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev2-gafur-demirci-fatmaakin.git
```

#### Change directory

```bash
  cd myproject
```

#### Install NPM dependencies

```bash
  npm install
```

#### Then simply start your app

```bash
  node app.js
```

### Directory Structure

```txt
    +---controllers
    |   |   brand.js
    |   |   user.js
    +---helpers
    |   |   error-handler.js
    |   |   jwt.js
    +---routes
    |   +---brand
    |   |       brand.js
    |   +---user
    |   |       user.js
    |   |   api.js
    +---services
    |   |   brand.js
    |   app.js
    |   package.json
    |   package-lock.json
    
```

## Authors and Acknowledgments

- [@fatmakin](https://github.com/fatmakin)
- [@gafur-demirci](https://github.com/gafur-demirci)

## Feedback

If you have any feedback, please contact us at [mailto:fatmakin](fatmakin.fa@gmail.com) or [mailto:gafur-demirci](gafur.gs.68@gmail.com).

  
