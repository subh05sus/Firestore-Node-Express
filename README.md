# Firebase Firestore CRUD Operations with Node.js and Express

This repository contains a Node.js and Express application that demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Firebase Firestore. You can use this as a reference for building similar applications or integrating Firebase Firestore into your projects.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Firebase Admin SDK credentials: You should have a service account key JSON file to authenticate with Firebase Firestore. Place this file as `key.json` in your project directory.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/subh05sus/Firestore-Node-Express.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the Express server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## Usage

### Create a User

Send a POST request to `/create` with JSON data containing user information:

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "sex": "male"
}
```

### Read All Users

Send a GET request to `/read/all` to retrieve a list of all users in the Firestore database.

### Read a Specific User

Send a GET request to `/read/:id` where `:id` is the unique user ID to retrieve information about a specific user.

### Update a User

Send a POST request to `/update` with JSON data containing the user's ID and updated information:

```json
{
  "id": "user_id",
  "email": "new_email@example.com",
  "firstName": "New First Name",
  "lastName": "New Last Name",
  "age": 25,
  "sex": "female"
}
```

### Delete a User

Send a DELETE request to `/delete/:id` where `:id` is the unique user ID to delete a specific user from the Firestore database.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Replace `<repository_url>` with the URL of your GitHub repository. You can customize this `README.md` further to include additional information, screenshots, or usage examples as needed.