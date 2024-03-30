export async function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43034090-772f27db84397385e52753f5e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params}`;

  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
}
