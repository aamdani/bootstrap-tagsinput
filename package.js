Package.describe({
  name: 'brwn:bootstrap-tagsinput',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'bootstrap-tagsinput wrapper using the official bootstrap package dependency.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aamdani/bootstrap-tagsinput',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.1');
    // dependecies required by package
    api.use('twbs:bootstrap@3.3.4','client')
    // adding the required file for package
    api.add_files('lib/bootstrap-tagsinput.min.js', 'client');
    api.add_files('lib/bootstrap-tagsinput.css', 'client');
});
