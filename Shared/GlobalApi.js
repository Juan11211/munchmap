const { default: axios } = require("axios");

// The getGooglePlace function constructs an API request to fetch Google Places.
// Parameters:
// - category: The category of the place you're looking for (e.g., "restaurant").
// - radius: The search radius in meters.
// - lat: The latitude coordinate of the location.
// - lng: The longitude coordinate of the location.
const getGooglePlace = (category, radius, lat, lng) => axios.get('/api/google-place?' +
  'category=' + category + '&radius=' + radius + '&lat=' + lat + '&lng=' + lng);

export default {
  getGooglePlace
};