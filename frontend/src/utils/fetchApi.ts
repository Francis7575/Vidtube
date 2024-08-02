const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchApi = async (url: string) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}&maxResults=50`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
