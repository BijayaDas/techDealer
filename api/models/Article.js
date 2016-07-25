/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var moment = require('moment')
// var markdown = require('markdown').markdown;
var marked = require('marked');
var getSlug = require('speakingurl');

module.exports = {

  attributes: {
    title : { 
      type: 'string',
      required: true 
    },
    clean_title : { type: 'string' },
    cleanTitle: function(){
      if(typeof(this.clean_title) !== typeof('string')){
        this.clean_title = getSlug(this.title)
        this.save(function(err) {
          console.log(err);
        });
      }
      return this.clean_title
    },

    body : { type: 'string' },
    episode : { type: 'integer' },

    comments : {
      collection: 'comment',
      via: 'article'
    },
    // Add a reference to User
    subject: {
      model: 'course'
    },
    published_at: function(){
      return moment(this.createdAt).format('LLL')
    },
    bodyHTML: function(){
      // return markdown.toHTML(this.body)
      return marked(this.body)
    }
  },
  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    values.clean_title = getSlug(values.title);
    next();
  }
};

