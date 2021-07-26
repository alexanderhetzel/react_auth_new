function getRelevancy(value, searchTerm) {

    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else return 0;
}


const searchEngine = {getRelevancy};

export default searchEngine;