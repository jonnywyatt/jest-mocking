const { fetchData } = require('./fetch-data');

exports.getQuote = async () => {
  const data = await fetchData();
  const { content, originator } = data;
  return `${content} (${originator.name})`;
}
