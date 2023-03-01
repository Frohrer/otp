import { randomBytes } from 'crypto';

function getAlphabeticString(num) {
  let result = "";
  while (num > 0) {
    let remainder = (num - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    num = Math.floor((num - 1) / 26);
  }
  return result;
}


function generateOneTimePadTable(rows, columns) {
	// Generate a random one-time pad
	const pad = Array.from({ length: rows * columns }, () => Math.floor(Math.random() * 26));

	// Generate the HTML table
	const table = `
      <table>
        <thead>
          <tr>
            <th></th>
            ${Array.from({ length: columns }, (_, index) => `<th>${getAlphabeticString(index + 1)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${Array.from({ length: rows }, (_, rowIndex) => `
            <tr>
              <th>${rowIndex + 1}</th>
              ${Array.from({ length: columns }, (_, columnIndex) => `
                <td>${String.fromCharCode(65 + pad[rowIndex * columns + columnIndex])}</td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

	return table;
}

function generateRandomString(length) {
    return randomBytes(Math.ceil(length/2))
      .toString('hex')
      .slice(0, length);
  }

function generateOutputString(x) {
    let output = '';
    for (let i = 0; i < x; i++) {
        let table = generateOneTimePadTable(26, 26);
        output += `<!-- page break -->\n<div class="pagebreak"></div>\n<!-- page break -->\n${table}`;
    }
    return output;
  }

export {
  generateOneTimePadTable,
  generateOutputString,
  generateRandomString
}