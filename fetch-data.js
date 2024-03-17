exports.fetchData = async () => {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  const data = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': '3684838bcemshbca63a90bac4fbfp1db641jsnf5f1530851ff',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  });
  return data.json();
}
