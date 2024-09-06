#!/usr/bin/node

const request = require('request');
if (process.argv.length === 3) {
  const myArg = process.argv.slice(2);
  const starUrl = 'https://swapi-api.alx-tools.com/api/films/' + myArg[0];
  const options = { json: true };

  request(starUrl, options, async function (error, res, body) {
    if (error) {
      console.log(error);
    } else {
      for (const char of body.characters) {
        const rt = () => {
          return new Promise((resolve, reject) => {
            request(char, options, function (error, res, body) {
              if (error) { console.log(error); } else {
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
