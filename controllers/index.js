/*
 app.js
 Henry Suh
 301004212
 Mid-Term Test
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
