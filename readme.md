# Todo App

## Requirements 

1) Install Git
2) Install Node JS
3) Install MongoDB

## Step by Step Guide

1) Clone the Application
2) Start MongoDB Instance
3) Setup Environment Variables 
    - PORT : 3000 or any other port number
    - JWT_KEY : 'secret' or any other strong key
4) Start the Application - ```npm run start```
5) Access API's using POSTMAN
    - **Authenticate User** : GET ```http://localhost:3000/auth/:user/email```
    - **Fetch All Tasks** : GET ```http://localhost:3000/tasks```
    - **Fetch Single Task** : GET ```http://localhost:3000/task/:taskId```
    - **Create a New Task** : POST ```http://localhost:3000/tasks```
    - **Update a Task** : PUT ```http://localhost:3000/task/:taskId```
    - **Delete a Task** : DELETE ```http://localhost:3000/task/:taskId```
  6) Important Details
    - Note : Sharing sample id for beta version
    - For accessing API use ```token``` received from ```Auth API``` by passing ```Authorization``` as key and ```Bearer token``` in the headers of other API's
    - replace ```user``` with ```msethi``` and ```thecorporator@gmail.com``` 
    - replace ```taskId``` with ```id``` received after creating a task   