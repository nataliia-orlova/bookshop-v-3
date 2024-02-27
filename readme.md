### Here's an overview of how the frontend and backend work together in a MERN app and how the app is served to clients:

Backend (Server-side):

Node.js and Express.js: Node.js is used as the runtime environment, and Express.js is a web application framework for Node.js. Express.js helps in building the backend server and handling HTTP requests and responses.

MongoDB: MongoDB is a NoSQL database that stores the application data. Express.js interacts with MongoDB using a MongoDB driver, such as Mongoose, to perform CRUD (Create, Read, Update, Delete) operations.

APIs (Application Programming Interfaces): Express.js defines routes and controllers to handle API requests from the frontend. These APIs interact with the MongoDB database to fetch or manipulate data.

Frontend (Client-side):

React.js: React is a JavaScript library for building user interfaces. It allows for the creation of dynamic and interactive UI components. The frontend is responsible for presenting the data to users and handling user interactions.

Axios or Fetch: To make HTTP requests to the backend, the frontend uses libraries like Axios or the built-in Fetch API. These requests are sent to the API endpoints defined in the backend.

State Management: React manages the state of the application, ensuring that the UI is updated based on user interactions and data fetched from the backend.

Communication between Frontend and Backend:

The frontend communicates with the backend through HTTP requests. When a user interacts with the UI, the frontend sends requests to the backend API endpoints.

The backend processes these requests, interacts with the database if needed, and sends back the appropriate response, typically in JSON format.

Serving the MERN App:

During development, the frontend and backend can run on different ports, but in production, they are often served through a single domain.

A build process is used to bundle and optimize the frontend code. Tools like Webpack may be used to create a production-ready bundle.

The backend server (Node.js and Express) and the frontend build are deployed to a hosting environment (e.g., Heroku, AWS, or others). The backend server typically handles API requests, while the frontend files are served to clients when they access the application URL.

In some cases, a reverse proxy (e.g., Nginx or Apache) may be used to manage the routing and serve both the API requests and the static frontend files.

In summary, the MERN stack allows for the seamless integration of frontend and backend technologies, enabling the development of modern and scalable web applications. The backend manages data storage and business logic, while the frontend provides a user-friendly interface and interacts with the backend through APIs. The combined application is then deployed to a hosting environment for clients to access.

Implemented feature and functionality

Frontend:
login form
register
logout

Backend:

JWT http-only cookie instead of storing token in local storage on the client (which is then sent where required)

login, register (generate token)
logout (clear cookies)
update user profile
