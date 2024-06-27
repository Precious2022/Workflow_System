# Workflow System

## Introduction

This project is a web-based workflow system built using Node.js and Express. The main objective is to capture customer information via an HTML form, upload an Excel file containing financial data, and render a temporal graph of income and expenses for the last 12 months.

## Features

- Simple HTML form for user input
- File upload handling using Multer
- Data storage using SQLite
- Rendering of a bar chart using Chart.js

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd workflow-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node src/server.js
    ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `src/` - Contains the server code, routes, controllers, and utilities.
- `public/` - Contains static files like CSS and the graph HTML.
- `uploads/` - Directory for storing uploaded Excel files.
- `package.json` - Project dependencies and scripts.
- `README.md` - Project documentation.

## Assumptions

- Only one user will use the system; no user management is implemented.
- Simple data storage using SQLite.
- The uploaded Excel file contains financial data in a specific format.

## Extending the System

- To extend the system, i plan to add new routes and controllers in the `src` directory.
- Update the `excelParser.js` utility to handle different file formats or additional data processing.

## Dependencies

- Express - Web framework for Node.js.
- Multer - Middleware for handling file uploads.
- SQLite3 - SQLite database driver.
- Chart.js - Charting library for rendering graphs.

## License

MIT License


