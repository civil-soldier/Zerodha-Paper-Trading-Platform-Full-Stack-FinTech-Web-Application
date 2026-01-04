const {model} = require("mongoose");

const {WatchlistSchema} = require('../schemas/WatchlistSchema');

const WatchlistModel = new model("list" , WatchlistSchema);

module.exports = {WatchlistModel};