const express = require('express');const app = express();const path = require('path');const port = process.env.PORT || 5000;
express.static(path.join(__dirname, 'client/build'));
//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
//res.sendFile(path.join(__dirname+'/client/public/index.html'));
console.log( `server listening on port: ${port}`);

