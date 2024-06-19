var fs = require('fs');

fs.unlink('newfile.txt', function (err) //created a new text file named newfile.txt
{
    if (err) throw err;
    console.log("FILE DELETED");
});