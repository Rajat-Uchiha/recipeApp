# Recipe Share and Save Application

This is a React application that allows users to share their own recipes and save recipes to cook later on. Users can create an account, add recipes, browse through other users' recipes, and save their favorite recipes for future reference.

## Features

- **User Authentication**: Users can create an account, log in, and log out. User authentication is implemented to ensure secure access to the application's features.

- **Recipe Creation**: Authenticated users can create their own recipes by providing a title, ingredients, preparation steps, and an optional image for each recipe. Recipes can be easily added.

- **Recipe Sharing**: Users can share their recipes with others. Shared recipes are visible to all users of the application.

- **Recipe Browsing**: Users can browse through the collection of recipes shared by other users. Recipes are displayed in a visually appealing format, including the recipe title, image, and a brief description.

- **Recipe Saving**: Users can save recipes they find interesting or want to cook later on. Saved recipes are stored in the user's profile and can be accessed at any time.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Rajat-Uchiha/recipeApp.git
   ```

2. Change to the project's directory:

   ```
   cd recipeApp
   ```

3. Install the required packages:

   ```
   npm install
   ```

## Configuration

1. MongoDB Setup:

   - Install MongoDB on your local machine or use a cloud-based MongoDB service.
   - Create a new MongoDB database for the application.
   - Obtain the connection URL for your MongoDB database.

2. Configure Node.js server in the application:

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and replace the placeholders with your MongoDB connection URL.
   - Save the changes.

## Usage

1. Start the Node.js server:

   ```
   npm run server
   ```

2. Start the React application:

   ```
   npm start
   ```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Contact

For any inquiries or questions, please reach out to [rajatraguvanshi3900@gmail.com](mailto:rajatraguvanshi3900@gmail.com).

---

Enjoy sharing and saving your favorite recipes with the Recipe Share and Save Application!
