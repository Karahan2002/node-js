var fs = require('fs');

fs.rename('mynewfile3.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
