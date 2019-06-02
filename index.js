const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Length, Content-Type, Authorization, ocp-apim-subscription-key, event, src, identHostName, Access-Control-Allow-Methods, access-control-allow-methods, access-control-allow-origin, access-control-allow-headers, no-cache');
    next();
});

app.use('/api', (rquest, response) => {
  const welcomeResponse = require('./welcome.json');
  response.status(200).json(welcomeResponse);
});


app.listen(PORT, () => {
  const package = require('./package.json');
  const fs = require('fs');
  const colors = require('colors');
  const os = require('os');
  const banner = fs.readFileSync('./banner.txt', { encoding: 'UTF-8' });

  console.log(colors.blue(banner));
  console.log('--------------------------------------');
  console.log(`Application Name: ${colors.yellow(package.name)}`);
  console.log(`Version:          ${package.version}`);
  console.log(`Port:             ${colors.cyan(PORT)}`);
  console.log(`Hostname          ${colors.red(os.hostname())}`);
  console.log(`Url:              http://localhost:${PORT}/`);

});