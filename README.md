# $${\color{red}Dummy \space \color{red}SQL \space \color{red}Query} $$

Dummy SQL Query Tool is a powerful web application designed to simplify and enhance the experience of working with databases. It provides a user-friendly interface for running SQL queries, with <code> additional features such as Dark Mode, result exportation , query history tracking and autocomplete search . It is capable of retrieving large amount of rows without any problem by using concept of pagination </code>. If you are an Data Analyst it has some Amazing Features that can help you in everyday hustle.



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
     
8. **DarkMode**
   - Sounds Boring feature but can be really usefull for the analyst as it can be easy on eyes when working in dark or working all day 
   - User can toggle between dark and light mode
     
7. **Pagination:**
   - While retrieving data with large number of rows at once browser get lagged or either get broken
   - to Tackle this issue and to Optimize the user Experience whole data is divided into different pages(just a concept it's rerendering results) with 50 result fields per page
     
  

## $${\color{red}Extra \space \color{lightblue}Features \space \color{lightgreen}{Added}}$$

# Feature Overview

- **Dark Mode**  
  ![Dark Mode](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/870d044a-bedf-4fcb-9e33-20dcad6d1712)  

  _Sound Boring but can be really beneficial when working for long hours or working in the dark._

- **Input Field with autocomplete Feature**  
  ![Input Field](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/9bfcdf12-ce61-4c08-a08a-8b4d31a2d4c8)
  
  _Just start typing in the input field, and you will have a dropdown that will show options to select from a predefined query based on your input. Also, you cannot run an empty query; it will give an error message._

- **Export as Csv, Html, Json Buttons**  
  ![Export Buttons](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/0f04533b-ccdd-46be-83c4-ecb2b58a4777)

  _Analysts can download results in any format they want, either HTML, JSON, or CSV._

- **Redo Button**  
  ![Redo Button](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/da1ebb66-c976-434c-836c-7638c86f062c)

  - Button that gives you a dropdown of your latest last 4 queries that you ran.
  - You can select an option from the dropdown and run the query to make the analyst's job easier.

- **History Records**  
  ![History Records](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/03dfd860-719a-4038-8e60-85a032fff9ce)

  - History page showing all history records in a sorted manner from newest to oldest by default.
  - Each record shows the date and time of the query ran, which query was ran, and 3 download buttons to download the result of the query in either HTML, JSON, or CSV format.
  - It also has a fully functional sort feature using which users can sort queries according to newest to oldest or oldest to newest.
  - It also has a clear history button to delete the entire history.

- **Pagination**  
  ![Pagination](https://github.com/sidxc74/Atlan_Assignment/assets/155380521/fe8f13ff-972a-4ab7-93e1-a68ee3b4876c)

  - While retrieving results with a large number of rows, the browser either gets broken or lags.
  - To fix this, introduced pagination where whole results are divided into the number of pages with at most 50 rows on each page, and the user can easily get results even from big files.
  - Pages here are just a concept, the logic is only 50 rows get retrieved at first, and as the user clicks on next, the next 50 queries get retrieved and so on.
  - Optimizes user experience and application performance. Fix alignment.

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

## Performance Metrics

- **Used Google PageSpeed Insights to Measure the Performance Metrics:**
    - Performance: 99%
    - First Contentful Paint (or first object rendered): 0.5 s
    - Largest Contentful Paint (Largest object rendered): 0.6 s
    - Total Blocking Time: 0.0 s
    - Speed Index: 1.2 s



```diff
- Optimizations

- earlier while retrieving data with large Number of Rows Browser was lagging or get broke
- to fix this I researched and found and introduced the Concept Of Pagination
- Results From Query is divided into Number of Pages( Pages is just concept it means to render specific amount of data in one go) with 50 results field per page
- Optimizes user Experience and workflow

```

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

```




 

