const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '45a2cc686a60956192392c3a6e4f1c8b';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json();
        return { success: true, data}
    }   catch (error) {
        return { success: false, error}
    }
}

// export const fetchWeather2 = (city) => {
//     return fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru`)
//     .then(response => response.json())
//     .then(data => ({ success: true, data }))
//     .catch(err => ({ success: false, err }));
// };

export const fetchForecast = async (city) => {
    try {
        const response = await fetch(`${API_URL}forecast?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json();
        return { success: true, data}
    }   catch (error) {
        return { success: false, error}
    }
}

