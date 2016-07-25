/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	name: {
        type: 'string',
        required: true,
        unique: true
    },
    pre_requisites: {
        type: 'string',
    },
     tags: {
        type: 'string',
    },
    image: {
        type: 'string',
    },
     // Add a reference to Article
     articles: {
        collection: 'article',
        via: 'subject'
    }
  }
};

