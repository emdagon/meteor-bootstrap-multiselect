Package.describe({
  name: "emdagon:bootstrap-multiselect",
  version: "0.0.1",
  summary: "Bootstrap Multiselect wrapper for Meteor",
  git: "https://github.com/emdagon/meteor-bootstrap-multiselect.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(['standard-app-packages', 'templating'], 'client');
  api.addFiles([
    "bootstrap-multiselect/dist/js/bootstrap-multiselect.js",
    "bootstrap-multiselect/dist/css/bootstrap-multiselect.css",
    "Multiselect.html",
    "Multiselect.js"
  ], 'client');
});
