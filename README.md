# Yenetta-Code-Bootcamp-Test

This repository contains a template code for a Node.js server and a vanilla JavaScript application. 

## NB 

If you are using a different technology you can use your own folder structure. But if you are using JavaScript, use one of the provided project templates. 
- Use app project template, if you plan to work with vanilla javascript
- Use api project template, if you plan to work with Nodejs


## Folder Structure

- **Yenetta-Code-Bootcamp-Test:** The root folder of the project.
  - **api:** The "api" directory contains the Node.js server code.
  - **app:** The "app" directory contains the vanilla JavaScript application code.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

### Setup

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/samson-16/yenetacode.git

2. Create a MySQL database manually called 'product_management'.
3. If your mysql server is configured to use password to connect please edit the development.js file in the config folder. Add you password to the password field currently it is empty string. If you set the NODE_ENV to production make the change in the .env.example file only.
3. Move to the 'app' folder and run npm install.
4. Move back and change directory to the 'api' folder and run the command npm install. This will install the necessary packages.
5. While you are in the 'api' folder run 'npm run dev'. This will run the server and sync the database table for you.
6. Open another terminal and change directory to 'app' folder the run npm run dev. This will start the vite server and click the link displayed in the terminal. This will open a browser with the project 
