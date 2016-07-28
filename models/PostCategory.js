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
	image_url: { type: String, required: true, default: 'images/' },
	tags: { type: Types.TextArray },
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
