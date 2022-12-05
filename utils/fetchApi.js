import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
                 'X-RapidAPI-Key': '198c0e22acmshc7916a96a59986dp1248a2jsnce09cf18be3d',
                 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }
    });

    return data;
}