fs = require('fs');


setInterval( () => {
    let content = 'x.set(\\freq,'+(50+Math.random()*4000)+');'
    fs.writeFile('test.scd', content, (err) => {
      if (err) throw err;
      console.log(content);
    });


}, 2000)