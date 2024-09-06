#!/usr/bin/node

const request = require('request');
if (process.argv.length === 3) {
  const My_Args = process.argv.slice(2);
  const Star_url = 'https://swapi-api.alx-tools.com/api/films/' + My_Args[0];
  const options = { json: true };

  request(Star_url, options, async function (error, res, body) {
    if (error) {
      console.log(error);
    }
    else {
      for (const char of body.characters) {
        const rt = () => {
          return new Promise((resolve, reject) => {
            request(char, options, function (error, res, body) {
              if (error) { console.log(error); }
              else {
                resolve(body.name);
              }
            });
          });
        };
        console.log(await rt());
      }
    }
  });
}
