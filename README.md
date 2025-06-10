# Blog Web App

## About The Project

A blog platform where users can securely create, edit, and delete posts. It features a clean interface for managing content and includes access control to ensure users can only modify their own posts. The backend is optimized for fast and efficient data handling.

## Usage

Home Page:

![home page](assets/homepage.png)

Register Page:

![register page](assets/registerpage.png)

Login Page:

![login page](assets/loginpage.png)

Create Post Page:

![create post](assets/createpost.png)

Post Page:

![post page](assets/postpage.png)

Edit Post Page:

![edit post](assets/updatepost.png)

## Instructions

1. Clone the repository
2. Run yarn install in the main directory and run yarn install again in the client directory to ensure all the dependancies are installed.
3. Create a .env file in the api directory and update the file with the correct unique values for MongoDB (variables can be found in index.js in the api directory)
4. Switch to the api directory and run nodemon index.js to start the backend
5. Switch to the client directory and run yarn start to start the frontend
