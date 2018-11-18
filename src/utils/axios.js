import axios from 'axios';

const ClientID = 'ZQHLRBKWGNBL0OFWUBZKEIDUDN5TMERLPFP54EZKHG2ZG52T';
const ClientSecret = '3HJMJKAT0TFEDFNT5AI21DIH3G4FOEIS5GLITW4KZBIE2352';
const longLat = '23.793818,90.404720';
const versioning = '20181115';
const radius = '1000';

export const searchNearbyRestaurants = (searchTerm) => {
    return axios.get('https://api.foursquare.com/v2/venues/explore?client_id=' + ClientID +
        '&client_secret=' + ClientSecret + '&v=' + versioning + '&limit=10&ll=' + longLat + '&radius=' + radius + '&query=' + searchTerm);
};