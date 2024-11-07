export default function json2html(data) {
  // Extract all unique keys from data objects to form columns
  const columns = [...new Set(data.flatMap(obj => Object.keys(obj)))];

  // Start building the HTML string
  let html = '<table data-user="vishnu.arad@gmail.com"><thead><tr>';

  // Append column headers
  for (const col of columns) {
      html += <th>${col}</th>;
  }
  html += '</tr></thead><tbody>';

  // Append rows
  for (const row of data) {
      html += '<tr>';
      for (const col of columns) {
          html += <td>${row[col] || ''}</td>; // Empty string if key doesn't exist
      }
      html += '</tr>';
  }
  html += '</tbody></table>';

  return html;
}