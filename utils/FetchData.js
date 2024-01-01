async function fetchCsvFile(csvFileName) {
    try {
      const response = await fetch(`./Data/${csvFileName}`);
      const text = await response.text();
      const parsedData = parseCsv(text);
      return parsedData;
    } catch (error) {
      console.error(`Error fetching or parsing CSV data for ${csvFileName}:`, error);
      return null;
    }
  }
  
  function parseCsv(csvText) {
    const rows = csvText.split('\n');
    const headers = rows[0].split(',');
  
    const data = rows.slice(1).map((row) => {
      const values = row.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  
    return data;
  }
  
  export default fetchCsvFile;