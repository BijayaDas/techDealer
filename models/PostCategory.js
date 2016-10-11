var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

PostCategory.add({
	name: { type: String, required: true },
	type: { type: Types.Select, options: 'Tutorial, Blog, Application' },
	category: { type: Types.Select, options: 'Technology, Business, Academic, Pro-Skill, Competitive Exam, Misc' },
	section: { type: Types.Select, options: 'Languages, Frameworks, Technology, Database, Servers, Entrepreneurship, Sales, Finance, Data Science, Internet Of Things, Business, UPSC' },
	subject: { type: Types.Select, options: 'C, C++, AWS, MySQL' },
	image_url: { type: String, required: true, default: 'images/courses/techdealer.jpg' },
	tags: { type: Types.TextArray },
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
