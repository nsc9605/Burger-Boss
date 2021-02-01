  # Burger Boss :hamburger: 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   

  ## Description

  Burger Boss is an application that tracks burgers waiting to be **devoured** and those that have already been **devoured**. Following the MVC design pattern, this application was created using Node, Express, Express Handlebars, and MySQL. This application allows the user to build a list of burgers which will save to a database. The user can enter the name of the burger they would like to add into the form which will then appear in the list of burgers on the left side of the window. That burger can then be devoured and added to the list of devoured burgers. There is also an option to delete a burger if the user wishes.

  [Click me to deploy app!](https://burger-boss-catapano.herokuapp.com)
  
  ## Table of Contents
  
  * [Features](#features)
  * [Demonstration](#demonstration)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Technologies](#technologies)
  * [Contact Information](#contact-information)
 
  ## Features

  - The `config` folder houses the two javascript files:
    - `connection.js` code to connect node to MySQL.
    - `orm.js` which contains the methods used in order to retrieve and store data in the database.  
  - The public folder contains the css and images files that represent the front-end.
  - The `db` folder contains the MySQL files including: 
    * `schema.sql` which contain the SQL queries.
    * `seeds.sql` can contain a few starter burgers to populate the database with options.
  

  ## Demonstration
  ![Burger-Boss Gif](./public/assets/img/)


  ## Installation

  The following dependencies are required to be installed for this application to run properly:
      
      npm i
      npm install express
      npm install express-handlebars
      npm install mysql


  ## Usage

  Once all dependencies have been installed, users should run the following command in the terminal:

     `node server.js` 

  This command and will instruct the app to begin listening on the `LocalHost: PORT`. This will then instruct users to either `Cmd + Click` for Mac users or  `Ctrl + Click` on Windows which will open the browser with the following address or to enter the following in the web browser to deploy the application locally.               

    `localhost:8080`. 
  
  A deployed link is provided for this specific project through Heroku.


  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  This application is licensed under the MIT License. 


  ## Contribution

  This project was creating with help from:
  * Provided material from: BootCamp Spot class 
  * My tutor [Eric Wallen](https://github.com/ericwallen)
  * Help from other students in the class in a private study group.

  This video helped get me started setting up my files and making sure I had all required dependencies installed:
  * [Click me to view video!](https://www.youtube.com/watch?list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr&v=G7RvQMW2DOg&feature=youtu.be)

    
  ## Technologies
  
  * [Node.js](https://nodejs.org/en/)  
  * [Express.js](https://expressjs.com/)
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [MySQL](https://dev.mysql.com/)
  * [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
  * [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
  * [Visual Studio Code](https://code.visualstudio.com/)
  * Terminal / Git Bash
    
  ## Contact Information

   * GitHub: [nsc9605](https://github.com/nsc9605)
   * Portfolio: [Deploy Portfolio](https://nsc9605.github.io/Responsive-Portfolio/)
   * Email:  [Nicole Catapano](mailto:nsc9605@gmail.com)
