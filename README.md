
# REST API with Node.js - Boilerplate

In this study, a structure was established by taking category and brand data from Trendyol API with node.js and accessing these data after user registration and login processes.

With the registration process, the user receives an access token, and in order to receive this token, it is necessary to enter data suitable for the validation determined by joi. Then, it can perform the login process from the login url with the token it has obtained and access the relevant data retrieved from the Trenyol API.

The node.js packages used are listed below. You can find the documentation links of the relevant packages at the end of the article.


## Used Technologies

**Client:** Postman

**Server:** Node, Express

**Packages:** Axios, Express, Express-jwt, Joi, Jsonwebtoken, Nodemon    




  ## Getting Started
The easiest way to get started is to clone the repository:

#### Get The Latest Snapshot

```bash
  git clone https://github.com/sahat/hackathon-starter.git myproject
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
    +---build
    +---client
    |   +---app
    |   |   +---core
    |   |   +---modules
    |   |       +---demo
    |   |       +---devices
    |   |       +---home
    |   |       +---posts
    |   |       +---session
    |   |                   
    |   +---frontend
    |   +---images
    |   +---scss
    |                   
    +---data
    +---logs
    +---server
    |   |   bundle.js
    |   |   dev.js
    |   |   index.js
    |   +---applogic
    |   |   +---libs
    |   |   +---modules
    |   |       +---counter
    |   |       +---devices
    |   |       +---posts
    |   |       +---session
    |   +---config
    |   |       default.js
    |   |       index.js
    |   |       prod.js
    |   |       test.js
    |   |       
    |   +---core
    |   +---libs
    |   +---locales
    |   |   +---en
    |   |   +---hu
    |   +---models
    |   |       user.js
    |   +---public
    |   +---routes
    |   +---schema
    |   +---services
    |   +---views
    +---tests
    |
    |   package.json
    |   secrets.json
```


## Yazarlar ve Teşekkür

- [@fatmakin](https://github.com/fatmakin)
- [@gafur-demirci](https://github.com/gafur-demirci)
## Geri Bildirim

Herhangi bir geri bildiriminiz varsa, lütfen  adresinden bize ulaşın.

  