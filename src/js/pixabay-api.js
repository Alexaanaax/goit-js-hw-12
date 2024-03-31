import axios from 'axios';
import { refs, query, showLoader, currentPage, pageLimit } from '../main';

const myAxios = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImages() {
  const params = {
    key: '43034090-772f27db84397385e52753f5e',
    q: query,
    per_page: pageLimit,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  showLoader();

  const response = await myAxios.get('', { params });
  return response.data;
}
