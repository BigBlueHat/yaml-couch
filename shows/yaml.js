function (doc, req) {
  var yaml = require('lib/js-yaml');
  if (doc && 'yaml' in doc) {
    return JSON.stringify(yaml.load(doc.yaml));
  }
}
