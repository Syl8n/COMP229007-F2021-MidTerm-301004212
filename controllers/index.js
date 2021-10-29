/*
 app.js
 Henry Suh
 301004212
 Favourite Book List
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
