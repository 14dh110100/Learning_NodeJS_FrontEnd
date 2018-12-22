
const getIndexView = function(req, res) {
  res.sendFile('index.html', {root: 'views'});
  return res;
};
exports.getIndexView = getIndexView;

const getNewpageView = function(req, res) {
  res.sendFile('newpage.html', {root: 'views'});
  return res;
};
exports.getNewpageView = getNewpageView;
