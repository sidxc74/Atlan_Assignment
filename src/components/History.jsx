
import { downloadAsTable, downloadAsJson, downloadAsCsv } from '../../utils/downloadData';
import { useDispatch } from 'react-redux';
import { clearHistoryData } from '../features/history';
import { useState } from 'react';

const ExportButton = ({ onClick, label }) => (
  <button
    className='w-20 h-12 rounded-lg bg-lime-800 text-white cursor-pointer ml-2 hover:bg-orange-700 dark:bg-orange-600'
    onClick={onClick}
  >
    Export as: <br /> {label}
  </button>
);

function History() {
  const [historyData, setHistoryData] = useState(JSON.parse(localStorage.getItem('History')) || []);
  const [sortOrder, setSortOrder] = useState('desc');
  const dispatch = useDispatch();

  const handleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleDownloadTable = (result) => {
    downloadAsTable(result, 'history.html');
  };

  const handleDownloadJson = (result) => {
    downloadAsJson(result, 'history.json');
  };

  const handleDownloadCsv = (result) => {
    downloadAsCsv(result, 'history.csv');
  };

  const handleClear = () => {
    localStorage.removeItem('History');
    setHistoryData([]);
    dispatch(clearHistoryData());
  };

  const sortedHistoryData = sortOrder === 'asc' ? [...historyData]?.reverse() : historyData;

  return (
    <div className='my-10'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl text-black font-bold mb-4 dark:text-white'>Query History</h2>
      </div>
      <div className='flex mt-10 flex-col items-center'>
        {sortedHistoryData.length >= 1 && (
          <div className='flex w-3/4 mb-8 justify-between'>
            <button className='bg-lime-800 text-white px-4 py-2 rounded dark:bg-orange-600' onClick={handleSort}>
              Sort
              {sortOrder === 'desc' ? <span className='text-white'> ▲</span> : <span className='text-white'> ▼</span>}
            </button>
            <button className='bg-red-600 text-white px-4 py-2 rounded' onClick={handleClear}>
              Clear History
            </button>
          </div>
        )}
        {sortedHistoryData.length >= 1 ? (
          sortedHistoryData.map((hdata) => (
            <div key={hdata.id} className='w-3/4 border border-green-400 p-4 mb-4 rounded'>
              <div className='flex justify-between mb-2'>
                <div className='font-bold text-gray-700 dark:text-white'>{hdata.date}</div>
                <div className='font-bold text-gray-700 dark:text-white'>{hdata.time}</div>
              </div>
              <div className='mb-2 font-extrabold dark:text-orange-600'>{hdata.query}</div>
              <div className='flex justify-between items-center gap-6'>
                <div className='mb-2'>
                  <span className='text-gray-600 dark:text-white'>Result: </span>
                </div>
                <div className='flex gap-8'>
                  <ExportButton onClick={() => handleDownloadTable(hdata.result)} label='Table' />
                  <ExportButton onClick={() => handleDownloadJson(hdata.result)} label='JSON' />
                  <ExportButton onClick={() => handleDownloadCsv(hdata.result)} label='CSV' />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='flex flex-col items-center text-red-600 font-semibold'>
            No History Data <br />
            <span className='text-lime-800 font-bold dark:text-orange-600'>Run something and then come back here!!!</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
