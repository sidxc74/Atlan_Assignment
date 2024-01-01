# Dummy SQL Query Tool

Dummy SQL Query Tool is a powerful web application designed to simplify and enhance the experience of working with databases. It provides a user-friendly interface for running SQL queries, with additional features such as result exportation , query history tracking and autocomplete search. If you are an Data Analyst it has some Amazing Features that can help you in everyday hustle.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Run Queries](#run-queries)
  - [Export Results](#export-results)
  - [Query History](#query-history)
    - [View Last 4 Queries](#view-last-4-queries)
    - [Full History Page](#full-history-page)
    - [Sorting](#sorting)
    - [Export History](#export-history)
    - [Clear History](#clear-history)
  - [Autocomplete Search](#autocomplete-search)
  - [Error Handling](#error-handling)
- [Installation](#installation)
- [Frameworks and Libraries Used](#frameworks-and-libraries-used)

## Overview

 Dummy SQL Query Tool is feature-rich platform that caters to various aspects of database interaction.

### Key Highlights

1. **Query Execution Made Easy:**
   - Execute SQL queries effortlessly within the application.
   - View results in a structured tabular format, making data interpretation straightforward.

2. **Export Results in Multiple Formats:**
   - Choose from different export formats, including HTML, CSV, and JSON.
   - Save query results for documentation or external analysis.

3. **Comprehensive Query History:**
   - Keep track of the last 4 executed queries for quick reference and re-execution.
   - Access a full query history page with details such as execution date and time.

4. **Sorting and Filtering Options:**
   - Toggle between sorting the query history from newest to oldest and vice versa.
   - Efficiently manage and find queries with sorting and filtering options.

5. **Autocomplete Search:**
   - Utilize the autocomplete search feature for quick and efficient input of SQL queries.
   - Enhances the user experience by suggesting from predefined queries.

6. **Error Handling and Validation:**
   - Ensure the prevention of the execution of empty queries. Users must provide either a predefined query or any input that the application can use to retrieve specific or default results.
   - Clear error messages guide users in correcting their queries.

7. **User-Friendly Interface:**
   - Intuitive design for a seamless user experience.
   - Easy navigation between different features and pages.

### Why SQL Query Tool?

- **Efficiency Boost:**
  SQL Query Tool is designed to minimize the time and effort required for executing queries and managing results. The streamlined process ensures a more efficient workflow.


- **Data Integrity:**
  With features like clear error handling, the tool promotes data integrity by preventing the execution of empty input.

- **Developer-Friendly:**
  Developers can benefit from the tool's user-friendly interface, making it accessible to users with varying levels of expertise in SQL.

## Installation

To get started with SQL Query Tool on your local machine, follow these installation steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/sql-query-tool.git

# Navigate to the project directory
cd sql-query-tool

# Install dependencies
npm install

# Execute Code
npm run dev

## Frameworks and Libraries Used

The Dummy SQL Query Tool leverages several modern frameworks and libraries to enhance its functionality and provide a seamless user experience.

- **Vite:**
  Vite is used as the build tool for setting up the React project. Its fast build times and efficient development server make it an excellent choice for rapid development. Vite also supports the latest ECMAScript features, providing a modern development environment.

- **React-Router-Dom:**
  React-Router-Dom is employed to introduce multipage functionality to the application. This library enables the creation of a navigational structure within the React application, allowing users to move between different pages seamlessly. The use of React-Router-Dom enhances the overall organization and user experience.

- **React-Redux:**
  React-Redux is implemented for state management within the application. While managing state in a React application can be achieved without Redux, incorporating it streamlines the process, especially when dealing with complex state management requirements. In this project, React-Redux is specifically used to manage the state of query history records, providing a centralized and efficient way to handle application-wide data.

- **Tailwind CSS:**
  Tailwind CSS is utilized as a utility-first CSS framework for styling the React components. Its approach to building styles directly in the markup streamlines the styling process, making it easier to create responsive and visually appealing designs. Tailwind CSS offers a highly customizable and maintainable way to manage styles in a React application.

