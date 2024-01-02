import React, { useState } from 'react';
import fetchCsvFile from '../../utils/FetchData';
import { useDispatch } from 'react-redux';
import { addHistoryData } from '../features/history.js';
import { downloadAsCsv, downloadAsTable, downloadAsJson } from '../../utils/downloadData.js';

function Home() {
  const dummyQueries = [
    "SELECT * FROM categories WHERE category = 'Electronics'",
    "SELECT * FROM regions WHERE category = 'regions'",
    "SELECT * FROM suppliers WHERE supply_name LIKE '%ab'",
    "SELECT * FROM employees WHERE age > 25",
    "SELECT * FROM products WHERE products_name > 25 AND products_price < 1000",
    "SELECT company_name FROM customers GROUP BY company_name"
  ];

  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState('');
  const [optionsData, setOptionsData] = useState(dummyQueries);
  const [last4Options, setLast4Options] = useState([]);
  const [emptyError, setEmptyError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

  const csvname = ['categories', 'employees', 'regions', 'customers', 'suppliers', 'products'];
  const dispatch = useDispatch();

  const handleRunQuery = () => {
    if (value.trim() === '') {
      setShowOptions(false);
      setEmptyError('Can Not Run an empty field');
      return;
    }

    setCurrentPage(1)
    setEmptyError('');

    const tableName = `${extractTableName(value)}.csv`;

    fetchCsvFile(tableName)
      .then((data) => {
        setTableData(data);
        dispatch(addHistoryData({ query: value, result: data }));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const extractTableName = (query) => {
    const matches = query.match(/FROM\s+(\w+)/i);
    const tableName = matches?.[1] || 'employee_territories';

    return csvname.includes(tableName) ? tableName : 'employee_territories';
  };

  const handleInputChange = (e) => {
    setShowOptions(true);
    setValue(e.target.value);
    const filteredOptions = dummyQueries.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setOptionsData(filteredOptions);
  };

  const handleOption = (selectedOption) => {
    setShowOptions(false);
    setValue(selectedOption);
    setOptionsData([]);
    setLast4Options([]);
  };

  const handleClick = () => {
    const lastQueries = JSON.parse(localStorage.getItem('History')) || [];

    if (lastQueries.length > 0) {
      const last4Queries = lastQueries.slice(0, 4).map((object) => object.query);

      setLast4Options(last4Queries);
    }
  };

  const handleExport = (exportType) => {
    if (tableData.length > 0) {
      switch (exportType) {
        case 'table':
          downloadAsTable(tableData, 'result.html');
          break;
        case 'json':
          downloadAsJson(tableData, 'result.json');
          break;
        case 'csv':
          downloadAsCsv(tableData, 'result.csv');
          break;
        default:
          break;
      }
    }
  };

  const ITEMS_PER_PAGE = 50;
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const visibleTableData = tableData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleToggleOptions = () => {
    setOptionsData(dummyQueries);
    setShowOptions((prev) => !prev);
  };

  return (
    <div>
    <div className='ml-52'>
      <div className='text-pink-600 font-semibold'>Created By Sidak Chuchra</div>
      <div className='text-pink-600 font-semibold'>sidxc72@gmail.com</div>
      </div>
    <div className="flex flex-col items-center gap-6">
      <div className="w-80 h-16 mt-20 text-center text-black text-3xl font-bold font-['Montserrat'] leading-10 dark:text-white">
        RUN YOUR QUERY
      </div>
      <div className='font-semibold text-pink-700 mb-2'>Start Typing or Click on 🔽 to select a query from the dropdown</div>
      <div className='font-semibold text-red-600 mb-4'>Note: If you run anything outside of the query list, it will show default data</div>
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-[32rem] h-20 p-3 bg-neutral-200 border-1 border-black"
          placeholder="Write a query starting with SELECT...."
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
        <button className='text-bold' onClick={handleToggleOptions}>{showOptions ? "🔼" : "🔽"}</button>
        <button
          className="w-20 h-10 text-center bg-lime-800 text-white text-base rounded-lg font-semibold font-['Inter'] leading-tight dark:bg-orange-600"
          onClick={handleRunQuery}
        >
          Run
        </button>
        <button className="w-8 h-10  rounded-lg" onClick={handleClick}>
          <img src="./history1.png" className="h-8  object-cover rounded-full border-black " alt="History" />
        </button>
        {last4Options.length > 0 && (
          <div className="translate-x-[27rem] translate-y-44 absolute flex flex-col  w-52  mt-10 text-wrap border-black  border-2 hover:bg-slate-300  cursor-pointer">
            {last4Options.map((last, index) => (
              <div key={index}>
                <div
                  className="w-5xl h-20 p-1  bg-lime-800 text-white border-black  border-b-2 hover:bg-slate-300  cursor-pointer dark:bg-orange-600 dark:text dark:border-slate-200"
                  onClick={() => handleOption(last)}
                >
                  {last}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-red-600 font-semibold">{emptyError}</div>
      {showOptions && optionsData.length > 0 && (
        <div className="absolute w-72 z-50  -translate-x-20 translate-y-96 flex flex-col items-center justify-center border-2 overflow-y-scroll">
          {optionsData.map((oD, index) => (
            <div key={index}>
              <div
                className="p-1 w-5xl   bg-lime-800 text-white border-black  border-2  cursor-pointer dark:bg-orange-600 dark:border-slate-200"
                onClick={() => handleOption(oD)}
              >
                {oD}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="w-80 h-6 text-center mt-10 text-black text-3xl font-bold font-['Montserrat'] dark:text-white">Result ⬇</div>
      
      {tableData && tableData.length > 0 ? (
        <>
          <div className="flex gap-8 mt-4">
            <button
              className="w-20 h-12 rounded-lg bg-lime-800 text-white  cursor-pointer ml-2 hover:bg-lime-700 dark:bg-orange-600 dark:hover:bg-orange-500"
              onClick={() => handleExport('table')}
            >
              Export as: <br></br>Table
            </button>
            <button
              className="w-20 h-12 rounded-lg bg-lime-800 text-white  cursor-pointer ml-2 hover:bg-lime-700 dark:bg-orange-600 dark:hover:bg-orange-500"
              onClick={() => handleExport('json')}
            >
              Export as: <br></br> JSON
            </button>
            <button
              className="w-20 h-12 rounded-lg bg-lime-800 text-white  cursor-pointer ml-2 hover:bg-lime-700 dark:bg-orange-600 dark:hover:bg-orange-500"
              onClick={() => handleExport('csv')}
            >
              Export as: <br></br> CSV
            </button>
          </div>
          <div className="flex translate-y-8 justify-center mt-4">
            <button
              className="bg-lime-800 w-24  text-white px-4 py-2 rounded-lg dark:bg-orange-600"
              onClick={() => handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-4 text-lg text-lime-800 dark:text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="bg-lime-800 w-24  text-white px-4 py-2 rounded-lg dark:bg-orange-600"
              onClick={() => handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <div className="p-10">
            <table className="border-collapse border border-black">
              <thead>
                <tr>
                  {Object.keys(tableData[0]).map((header) => (
                    <th key={header} className="mx-10 border bg-orange-800 text-white border-black px-4 py-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleTableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.keys(tableData[0]).map((header) => (
                      <td
                        key={header}
                        className="mx-16 border bg-lime-200 border-black px-4 py-2"
                      >
                        {row[header] !== undefined ? row[header] : 'Null'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-red-600 font-semibold">Run a Query to get Data!!....</div>
      )}
    </div>
    </div>
  );

}

export default Home;

