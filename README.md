# Try Hack Me task manager

This application;
 - Create a new task with all the necessary information
 - Implement a user-friendly way to display existing tasks
 - Has the ability to edit and delete tasks

## To Execute

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Issues
### Ensure the server is up.
The server is setup locally and should be running on http://localhost:4000 by default


---

# Try Hack Me Task Management App

This README provides an overview of a React application that combines user authentication and task management. The application uses React context for state management, cookies for authentication, and lazy loading for improved performance.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Dependencies](#dependencies)
6. [Contributing](#contributing)
7. [License](#license)

## Overview

This application serves as a user authentication and task management system. It leverages the following key components:

- **Context API**: The application uses the Context API to manage global state. The `MyContext` provider wraps the entire application, making state variables such as `tasks` and `token` accessible to all components.

- **Cookies**: For user authentication, the application utilizes cookies. The `CookiesProvider` component manages cookies for authentication purposes.

- **Lazy Loading**: To enhance performance, the application employs lazy loading through the `<Suspense>` component. Components are loaded asynchronously, ensuring a smooth user experience.

## Features

- **User Authentication**: Users can log in and register for an account. Authentication tokens are managed through cookies.

- **Task Management**: Authenticated users can view and manage their tasks. Tasks are displayed using the `<Tasks />` component.

- **Dynamic Routing**: The application uses React Router for dynamic routing. Users are directed to appropriate components based on their authentication status.

## Usage

To run this application locally:

1. Clone this repository.

2. Navigate to the project directory in your terminal.

3. Install the dependencies using `npm install` or `yarn install`.

4. Start the development server using `npm start` or `yarn start`.

5. Access the application in your web browser at `http://localhost:3000`.

## Folder Structure

The project folder structure follows best practices for organizing a React application:

```
src/
|-- components/
|   |-- Login.js
|   |-- Register.js
|   |-- Tasks.js
|-- context/
|   |-- MyContext.js
|-- App.js
|-- index.js
```

- `components/`: Contains the main application components.
- `context/`: Houses the context provider for managing global state.
- `App.js`: The root component where context providers are wrapped around the application.
- `index.js`: The entry point of the application.

## Dependencies

The application relies on the following major dependencies:

- `react`: The core React library.
- `react-router-dom`: For handling client-side routing.
- `react-cookie`: To manage cookies for authentication.

Please refer to the `package.json` file for a complete list of dependencies and their versions.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

---

This README provides a high-level overview of the React application. For detailed documentation and specific implementation details, please refer to the source code and comments within the project files.