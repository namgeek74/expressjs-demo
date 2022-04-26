const mongoose = require('mongoose');

const sessionsSchema = new mongoose.Schema({
  id: String,
  cart: Object,
});

const Sessions = mongoose.model('Sessions', sessionsSchema, 'sessions');

module.exports = Sessions;
