var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		courses: [],
	};
// debugger;
	view.on('init', function (next) {

		var q = keystone.list('PostCategory').model.find().sort('name');

		q.exec(function (err, results) {
			locals.data.courses = results;
			// console.log(results);
			next(err);
		});
// debugger;
	});
	// Render the view
	view.render('index');
};
