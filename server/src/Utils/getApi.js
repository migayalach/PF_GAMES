const axios = require('axios');

async function getApi(url, results = [], i = 0) {
  try {
    i += 1;
    const { data } = await axios(url);
    results = results.concat(data.results);
    if (i === 5) return results;
    if (data.next) return getApi(data.next, results, i);
    return results;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { getApi }