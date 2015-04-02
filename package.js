Package.describe({
  name: 'brwn:bootstrap-tagsinput',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'bootstrap-tagsinput wrapper using the official bootstrap package dependency.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('bootstrap-tagsinput.js');
});

Package.on_use(function (api) {
    // dependecies required by package
    api.use('twbs:bootstrap','client')
    // adding the required file for package
    api.add_files('lib/bootstrap-tagsinput/lib/bootstrap-tagsinput.min.js', 'client');
    api.add_files('lib/bootstrap-tagsinput/lib/bootstrap-tagsinput.css', 'client');
});