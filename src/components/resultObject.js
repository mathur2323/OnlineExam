const writeJsonFile = require('write-json-file');

export const resultObject = () => {
     writeJsonFile('foo.json', {foo: true})
     .then(()=>{
         console.log('worked')
     })
};