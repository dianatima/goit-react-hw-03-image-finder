import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32083326-5131f12fe438843c4a27c5327';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (response.status !== 200 || response.data.totalHits === 0) {
    return Promise.reject(new Error(`There are no images named "${query}" `));
  } else return response.data;
};
