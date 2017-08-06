import { SELECT_DATE_RANGE, SELECT_ARTICLE, DELETE_ARTICLE, RESET_DATE_RANGE } from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_DATE_RANGE:
//            return Object.assign({}, filters, { dateRange: payload.dateRange })
            return {...filters, dateRange: payload.dateRange}

        case SELECT_ARTICLE:
            return {...filters, selected: payload.selected}

        case DELETE_ARTICLE:
            return {...filters, selected: filters.selected.filter(id => id !== payload.id)}

        case RESET_DATE_RANGE:
            return {...filters }
    }

    return filters
}