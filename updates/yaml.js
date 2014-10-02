function (doc, req) {
  if (!doc){
    if ('id' in req && req['id']){
      // create new document
      if (req.headers['Content-Type'] == 'text/yaml') {
        return [
          {'_id': req['id'], 'yaml': req.body},
          'YAML stored!'
        ];
      }
      // TODO: handle other input media types
    }
    // change nothing in database
    // TODO: provide a textarea form for pasting in YAML
    return [null, '...I got nothing...'];
  }

  if (req.headers['Content-Type'] == 'text/yaml') {
    doc.yaml = req.body;
  }
  return [doc, 'YAML updated!'];
}
