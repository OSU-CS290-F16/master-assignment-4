var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var usersData = require('./users-data');
var port = process.env.PORT || 3000;

// Use Handlebars as the view engine for the app.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

/*
 * Here, you should set up the routing for the app.  The routing needs to
 * handle four main cases:
 *
 *   * Files in public/ should be served statically and should be availale
 *     out of the root path ('/').  For example, the file public/style.css
 *     should be available at the path '/style.css'.
 *
 *   * The root path ('/') should be routed to the index page implemented by
 *     views/index-page.handlebars.
 *
 *   * The dynamic path '/notes/<USER>' should be routed to the notes page
 *     implemented by views/notes-page.handlebars, but only for existing users.
 *
 *   * Any non-existent path, or any path '/notes/<USER>' for a user that
 *     does not exist should be routed to the 404 page implemented by
 *     views/404-page.handlebars.
 *
 * Each of these pages must receive the appropriate data to fill in the
 * corresponding Handlebars templates.  In particular:
 *
 *   * For every page, the page title (displayed in the browser tab) must be
 *     set.  See views/layouts/main.handlebars to figure out how to set this.
 *     For the index and 404 pages, the title should simply be 'ToDoIt'.
 *     For a user's notes page, the title should be 'ToDoIt - <NAME>', where
 *     <NAME> is the "logged-in" user's name.
 *
 *   * The index page must receive data to enable it to complete the list of
 *     users in your template in views/partials/user-select.handlebars.
 *
 *   * The navbar (implemented in views/partials/header.handlebars), is set
 *     up to display the user's name whenever there is a user "logged in".
 *     You must provide the appropriate data to your pages to make this happen.
 *
 *   * The notes page obviously must receive the data it needs to display the
 *     "logged-in" user's notes.
 */

/*
 * The below route is included just so you can connect with the server.  You
 * should eventually get rid of this.
 */
app.get('*', function (req, res) {
  res.send('The server is listening!')
});

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
