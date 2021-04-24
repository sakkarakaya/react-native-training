function reducer(state, action){
    switch(action.type){
        case "increase":
            state.counter = state.counter + 1;
            return { ...state }

        case "decrease":
            state.counter = state.counter - 1;
            return { ...state }

        case "reset":
            state.counter = state.counter * 0;
            return { ...state }

        case "change":
            state.name = action.payload.username;
            return { ...state }




        case "add-fav":
            const favoriList = [...state.favList]
            favoriList.push(action.payload.clicked)
            state.favList = favoriList
            return { ...state }

        default:
            return { ...state }
    }
}

export { reducer }  