const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');

db = low(adapter);

db.defaults({ users: [], sessions: [] }).write();

module.exports = db;
