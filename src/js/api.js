import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35913221-34348c22814a424275449694d';
const seachParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

let per_page = 40;

export async function getImg(searchQuery, page) {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&${seachParams}&page=${page}&per_page=${per_page}`
  );
  // page += 1;
  return { response, page };
}
