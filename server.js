import express from 'express';

////////////////////////////////////////////////////////////////////////////////
class BaazarBackend {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));
    app.listen(3000, () => console.log('Listening on port 3000'));    
  }
}

new BaazarBackend();
