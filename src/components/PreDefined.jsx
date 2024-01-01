import React from 'react';

function PreDefined() {
  const dummyQueries = [
    {
      query : "Default (Anything other than empty)",
      result : "Retrieve results from employees.csv file"
    },
    {
      query: "SELECT * FROM categories WHERE category = 'Electronics'",
      result: "Retrieve results from categories.csv file",
    },
    {
      query: "SELECT * FROM regions WHERE category = 'regions'",
      result: "Retrieve results from regions.csv file",
    },
    {
      query: "SELECT * FROM suppliers WHERE supply_name LIKE '%ab'",
      result: "Retrieve results from suppliers.csv file",
    },
    {
      query: "SELECT * FROM employees WHERE age > 25",
      result: "Retrieve results from employees.csv file",
    },
    {
      query: "SELECT company_name FROM customers GROUP BY company_name",
      result: "Retrieve results from customers.csv file",
    },
    {
      query: "SELECT * FROM products WHERE products_name > 25 AND products_price < 1000",
      result: "Retrieve results from products.csv file",
    },
    
  ];

  return (
    <>
      <div className='font-bold text-center text-4xl text-lime-800 dark:text-orange-600'>Dummy Queries with Tables associated with them</div>
      <div className='mx-auto p-10 w-4/5 translate-y-20 border-black border-2 min-h-80 flex flex-col gap-6 justify-center items-center bg-lime-800  dark:bg-orange-600'>
        {dummyQueries.map((dummyquery, index) => (
          <div key={index} className={`flex justify-between px-10 items-center w-full gap-[28rem] ${index === 5 ? 'font-semibold text-xl text-red-600 dark:text-purple-800' : 'text-white'} `}>
            <div className='font-bold'>{dummyquery.query}</div>
            <div>{dummyquery.result}</div>
          </div>
        ))}
        <div className='text-red-600 text-2xl dark:text-purple-800 '>   Different color Text Indicates Query that retrieve  over 10,000 rows</div>
        <div className='text-red-600 text-2xl dark:text-purple-800'> And as Browser was getting lagged while Retrieving such large rows together</div>
        <div className='text-red-600 text-2xl dark:text-purple-800'> So i used concept of Pagination to optimize it </div>
        <div className='text-red-600 text-2xl dark:text-purple-800'> Maybe Now i can get some Brownie 🍪 points as mentioned in Assginment 🤪</div>
      </div>
    </>
  );
}

export default PreDefined;