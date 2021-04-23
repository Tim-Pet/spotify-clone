// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId ="18b0b48a556c49ee8150d13e7e2ce82a"

//Functions, the user has available
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //accesToken=myKey&name=tim --> splits by '&' first and by '=' afterwards
            let parts = item.split('=');
            //parts 1 is myKey
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {})
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
