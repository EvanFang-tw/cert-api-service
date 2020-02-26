const fs = require('fs');
const x509 = require('x509');

const express = require('express');
const router = express.Router();

// Load configs
const configPath = process.cwd() + '/configs/certs.json';
if(fs.existsSync(configPath) === false) {
  throw "configs/certs.json does not exist";
}
const certs = JSON.parse(fs.readFileSync(configPath));

// Index
router.get('/', (req, res) => {
  res.send('cert api service');
})

// Get: cert configs
router.get('/configs', (req, res) => {
  res.send(certs);
});

// Get: parsed cert list
router.get('/certs', (req, res) => {
  let result = [];
  certs.forEach(cert => {

    if(cert.path && fs.existsSync(cert.path)) {
      result.push({
        ...cert,
        certificate: x509.parseCert(cert.path)
      });
    } else {
      result.push({
        ...cert,
        certificate: null
      });
    }
  });
  res.send(result);
});

module.exports = router;
