function (doc, req) {
  if (!doc) {
    if ('id' in req && req['id']) {
      // create new document
      if (req.headers['Content-Type'].split(';')[0] == 'text/yaml') {
        return [
          {'_id': req['id'], 'yaml': req.body},
          'Your new document is ' + req['id']
        ];
      }
      // TODO: handle other input media types
    }
    // no _id in the req object
    // so we use the uuid
    // TODO: parse incoming YAML and check for _id
    return [
      {'_id': req['uuid'], 'yaml': req.body},
      'Your new document is ' + req['uuid']
    ];
  }

  if (req.headers['Content-Type'] == 'text/yaml') {
    doc.yaml = req.body;
  }
  return [doc, 'YAML document `' + req['id'] + '` updated!'];
}
