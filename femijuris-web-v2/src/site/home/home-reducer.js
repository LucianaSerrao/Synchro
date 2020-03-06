

const home = {
    books: [],
};

export const home_reducer = (cState=home,action) => {
    switch (action.type) {
        case EBOOK_FETCHED_SUCCESSFULY:

            let ebookExists = cState.books.find(it => it.uri === action.payload.uri);

            if (!ebookExists) {
                cState.books.push( action.payload )
            }

            return cState;

        default:
            return cState
    }
}