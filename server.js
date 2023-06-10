import express from 'express';
import passport from 'passport';
import db from './db.js';
import path from 'path'
import Authorization from "./auth.js"

////////////////////////////////////////////////////////////////////////////////
class BaazarBackend {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));
    this._auth = new Authorization(app);
    app.get('/lookup/', this._doLookup);
    
    app.get('/auth/google/',
      passport.authenticate('google', {
        scope: ['email', 'profile']
      }));
    app.get('/auth/google/callback', passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));
    app.get('/', this._auth.checkAuthenticated, this._goHome);

    app.post("/logout", (req,res) => {
      req.logOut(err=>console.log(err));
      res.redirect("/login");
   })

    this._auth = new Authorization(app);
    app.listen(3000, () => console.log('CORRIENDO'));
  }

  async _doLookup(req, res) {
    const query = {};
    const collection = await db.collection("events");
    console.log (collection);
    const stored = await collection.find({}).toArray();
    console.log (JS0N.stringify(stored));
    res.json(stored);
    }
  async _goHome(req, res){

  }
}

new BaazarBackend();
