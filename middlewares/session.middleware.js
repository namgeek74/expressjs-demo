const shortid = require('shortid');
// const db = require('../db');
const Sessions = require('../models/sessions.model');

module.exports = async (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    const id = shortid.generate();
    res.cookie('sessionId', id, {
      signed: true,
    });

    await Sessions.create({ id });

    // db.get('sessions').push({ id: id }).write();
  }

  next();
};
