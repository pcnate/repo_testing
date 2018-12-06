const fs = require('fs-extra');
const randomstring = require('randomstring');

( async() => {

  await fs.ensureDir('./dist');


  await fs.writeFile( './dist/out.txt', randomstring.generate() );

})();


