export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5ef59f08c8mshb5c3ec90e02c6ffp14d29fjsn60631893c376',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}