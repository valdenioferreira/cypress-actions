const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2OTYzMDdiLWUzZWItNDlmMy1hZmQ5LWY3OWY4Y2E2ZjNlNy0xNzA1MzQ2NTI4NDA0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGI5N2M1NzYtMTM5Ny00NDViLThjZTQtNTk5YmRjNzQ5ZmVlIiwidHlwZSI6InQifQ.qSLJy20JKbsJEMMCPDMiheRCfPb9qobUZ8FGP_XVD5A'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
