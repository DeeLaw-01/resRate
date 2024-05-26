// Server ports and stuff
const backendPort = 5000
const backendHost = '192.168.100.16'
const backendUrl = `http://${backendHost}:${backendPort}`
const mapDataKey = '688aa451e6msh3b4dd748a54166cp161490jsn2f833e18d442'
const mapDataHost = 'maps-data.p.rapidapi.com'

// Api calls:
const customerIp = 'https://api.ipify.org?format=json'
const customerLocation = `http://ip-api.com/json/`
const nearbyRestaurants = `${backendUrl}/nearby`
const searchMaps = `${backendUrl}/searchmaps`
const getReviews = `${backendUrl}/reviews`
const registerUser = `${backendUrl}/register`
const loginUser = `${backendUrl}/login`

export {
  customerIp,
  customerLocation,
  nearbyRestaurants,
  searchMaps,
  mapDataKey,
  mapDataHost,
  getReviews,
  registerUser,
  loginUser
}
