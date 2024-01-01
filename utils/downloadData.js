// downloadUtils.js


export const downloadAsTable = (data, filename) => {
    const tableContent = convertToTable(data);
    const blob = new Blob([tableContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };
  
  const convertToTable = (data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map((row) => Object.values(row));
  
    const tableHtml = `
      <table border="1">
        <thead>
          <tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows
            .map((rowData) => `<tr>${rowData.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
            .join('')}
        </tbody>
      </table>
    `;
  
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Result Table</title>
        </head>
        <body>
          ${tableHtml}
        </body>
      </html>
    `;
  };

  
  export const downloadAsJson = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };
  
  export const downloadAsCsv = (data, filename) => {
    const csvContent = convertToCsv(data);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };
  
  const convertToCsv = (data) => {
    // Implement your CSV conversion logic here
    // This is a simple example, you might need to adjust based on your data structure
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map((row) => Object.values(row).join(','));
    return `${headers}\n${rows.join('\n')}`;
  };
  