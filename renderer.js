const fs = require('fs');

const editor = document.querySelector('#editor');
const loadInput = document.querySelector('#load-input');
const saveButton = document.querySelector('#save-button');

loadInput.addEventListener('change', () => {
    fs.readFile(loadInput.files[0].path, 'utf-8', (err, data) => {
        if (err) { throw err; }
        editor.value = data;
      });
}, true);

saveButton.addEventListener('click', () => {
    fs.writeFile(loadInput.files[0].path, editor.value, (err, data) => {
        if (err) { throw err; }
      });
}, true);