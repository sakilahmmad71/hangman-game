// this is Asynchoronous promise based http request
const getPuzzle = async (wordCount) => {
    const request = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (request.status === 200) {
        const data = await request.json()
        return data.puzzle
    } else {
        throw new Error('Cannot fetch puzzle data')
    }
}

// get specific location using asynchoronous ipinfo.io
const getLocation = async () => {
    const request = await fetch('http://ipinfo.io/json?token=e52b37a5c8a161')
    if (request.status === 200) {
        const data = await request.json()
        return data
    } else {
        throw new Error('Cannot fetch ipinfo api data')
    }
}

// get specific country using asynchoronous promise http request
const getCountry = async (countryCode) => {
    const request = await fetch('http://restcountries.eu/rest/v2/all')
    if (request.status === 200) {
        const countries = await request.json()
        const country = countries.find(country => country.alpha2Code === countryCode)
        return country.name
    } else {
        throw new Error('Cannot fetch country name')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}