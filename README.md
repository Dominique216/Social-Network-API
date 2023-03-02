[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Social Network API
## Description 
This is a social network API made using MongoDB that allows users share their thoughts, react to friends, and create a friends list. This is backend ony application.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
## Installation
1. Copy the SSH key from the Repo into a folder on your own computer
2. Once the files are installed, open the folder in your personal workspace
3. For this application you will have to install express and mongoose in the package.json file
4. In the connjection.js file put your personal MongoDB connection URL.
5. Open the integrated terminal and run node index.js.
6. Open Insomina and the get, post, update, and delete requests should work for `localhost/3001/api/users` and `localhost/3001/api/thoughts`. You can also run get routes on individual id numbers by adding `/:id` to the end of the url. In addtion, post and delete routes will work for `localhost/3001/api/users/:userId/friends/:friendId` to add or delete a friend based on thier id number as well as `localhost/3001/api/thoughts/:thoughtId/reaction` to add a reaction and `localhost/3001/api/thoughts/:thoughtId/reaction/reactionId` to delete a reaction based on its id. 
## Usage
[Walkthrough Video]()
## License
This project uses an MIT license. For more information click the license badge at the top of the README.


