export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    //token:null,//'BQCpfKnj8YaDx6M7dG86Mw-t39mHE26911ML0hkYNdD4G37biHgiEzeugrg3OvE2u-n-zhafpEW6GSDIhZKsqLHsAv7K6wo3umqEse20_oQycRfBnp0oNBhH2DnsmqwtjlKTg423e-NUElAi_2n3PQ',
};

const reducer = (state, action) =>{
    console.log(action);

    //Action --> type, [payload]

    switch(action.type) {
        case 'SET_USER': return{...state, user: action.user,};
        case 'SET_TOKEN': return{...state, token: action.token};
        case 'SET_PLAYLISTS': return{...state, playlists: action.playlists};
        case 'SET_DISCOVER_WEEKLY': return{...state, discover_weekly:action.discover_weekly}
        default: return state;
    }
}

export default reducer;