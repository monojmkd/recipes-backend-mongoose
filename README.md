# 🍽️ Recipe Management API

A simple, robust RESTful API built with **Node.js**, **Express**, and **MongoDB** (via Mongoose) for managing recipes.

## 📦 Features

- ✅ **Add new recipes (Create)**
- 🔍 **Fetch recipes by title or author (Read)**
- ✏️ **Update existing recipes (Update)**
- 🗑️ **Delete recipes by ID (Delete)**
- 📅 **Timestamps** for recipe creation and updates
- ⚠️ **Proper error handling** with descriptive status codes

## 🧱 Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose ODM)  
- **Environment:** Localhost (Optionally connect to MongoDB Atlas)  

## 🚀 Getting Started

### Prerequisites

- [Node.js & npm](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/) database (local or Atlas)  

### Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/<your-username>/<repo-name>.git
    cd <repo-name>
    ```

2. **Install dependencies:**

    ```
    npm install
    ```

3. **Set up environment variables:**

    - Copy `.env.example` to `.env` and adjust:

        ```
        MONGODB_URI=mongodb://localhost:27017/recipes
        PORT=3000
        ```

4. **Run the server:**

    For production:

    ```
    npm start
    ```

    For development with auto-reload:

    ```
    npm run dev
    ```

## 🛠️ API Endpoints

| Method | Endpoint                  | Description                 |
|--------|---------------------------|-----------------------------|
| POST   | `/api/recipes`            | Add a new recipe            |
| GET    | `/api/recipes`            | List all recipes            |
| GET    | `/api/recipes/:id`        | Get recipe by ID            |
| PUT    | `/api/recipes/:id`        | Update a recipe by ID       |
| DELETE | `/api/recipes/:id`        | Delete a recipe by ID       |
| GET    | `/api/recipes?title=xxx`  | Filter by title             |
| GET    | `/api/recipes?author=yyy` | Filter by author            |

## ⚠️ Error Handling

- API responses use meaningful status codes: `200`, `201`, `400`, `404`, `500`.  
- Invalid routes or bad data return structured error messages.

## 🤝 Contributing

Feel free to fork the repo, open issues, or submit pull requests to enhance the API!

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Express Documentation](https://expressjs.com/)  
- [Mongoose Documentation](https://mongoosejs.com/)  
- [MongoDB Atlas](https://www.mongodb.com/atlas)  

Happy coding!
