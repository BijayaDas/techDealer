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
	type: { type: Types.Select, options: 'tutorial, course, podcast, blog' },
	section: { type: Types.Select, options: 'Languages, Frameworks, Technology, Database, Servers, Entrepreneurship, Sales, Finance, Data Science, Internet Of Things' },
	image_url: { type: String, required: true, default: 'images/' },
	tags: { type: Types.TextArray },
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
