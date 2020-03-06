
import {
    EBOOK_CLICKED_TO_REGISTER, EBOOK_EMAIL_REGISTERED_FAILED,
    EBOOK_FETCH_FAILED, EBOOK_FETCHED_SUCCESSFULY, EBOOK_FETCHING,
    EBOOK_SECTION_SUCCESSFULY
} from "../../actions/ebookActions"

const ebook = {
    book: null,
    loading: false,
    error: null
}

export const ebook_reducer = (cState=ebook,action) => {
    switch (action.type) {
        case EBOOK_FETCHED_SUCCESSFULY:
            console.log('EBOOK_FETCHED_SUCCESSFULY')
            return {...ebook,loading: false, book: action.payload}

        case EBOOK_FETCHING:
            return {...cState,loading: true}

        case EBOOK_FETCH_FAILED:
            return {...cState,loading: false, error: action.payload}

        case EBOOK_SECTION_SUCCESSFULY:

            if (!cState.book)
                return {...cState,loading: false, error: 'BOOK_NOT_LOADED_YET'}

            let section = cState.book.sections.find(it => (it.uri === action.payload.uri))
            if (!section)
                return {...cState,loading: false, error: 'BOOK_HAS_NOT_THIS_SECTION'}


            let newSections = cState
                .book
                .sections
                .map(it => (it.uri === action.payload.uri) ? {...it, delta: action.payload.data} : it)


            return  {
                ...cState,
                book: {
                    ...cState.book,
                    sections: newSections
                }
            }

        case EBOOK_CLICKED_TO_REGISTER:
            return {
                ...cState,
                showDownloadButtons: true
            }

        case EBOOK_EMAIL_REGISTERED_FAILED:
            console.log('EBOOK_EMAIL_REGISTERED_FAILED')
            return cState

        default:
            return cState
    }
}