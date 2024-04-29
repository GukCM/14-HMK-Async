async function fetchCountryData(countryName) {
    const response = await fetchData(`https://restcountries.com/v3.1/name/${countryName}`);
    const parsedData = await parseJsonResponse(response);
    const country = extractFirstCountry(parsedData);
    return {
        name: country.name.common,
        currency: getCurrencyName(country),
        coordinates: country.latlng
    };
}

async function fetchData(url) {
    return await fetch(url);
}

async function parseJsonResponse(response) {
    return await response.json();
}

function extractFirstCountry(data) {
    return data[0];
}

function getCurrencyName(country) {
    return Object.values(country.currencies)[0].name;
}

fetchCountryData('Colombia').then(console.log);
