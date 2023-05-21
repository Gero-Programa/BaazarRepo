import express from 'express';
import passport from 'passport';
import db from './db.js';
import path from 'path'


////////////////////////////////////////////////////////////////////////////////
class BaazarBackendServer {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));
    app.listen(3000, () => console.log('Listening on port 3000'));    
    const xd = path.join(__dirname, 'public');
    app.get('/', function(req, res) {
      res.sendFile(path.join(xd, 'login.html'));
    });
    app.get('/logindone', function(req, res) {
    res.sendFile(path.join(xd, 'index.html'));
    });

  }
}

new BaazarBackendServer();
