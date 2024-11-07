export default function json2html(data) {
    // Extract unique headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Build HTML for headers
    const headerRow = headers.map(header => `<th>${header}</th>`).join('');
    
    // Build HTML for each row in the data
    const rows = data.map(row => {
      return `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    }).join('');
  
    // Construct and return the HTML table
    return `<table data-user="vishnu.arad@gmail.com">
      <thead><tr>${headerRow}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  }
  