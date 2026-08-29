const getUpperCase = (str) => str.toUpperCase();
const getLowerCase = (str) => str.toLowerCase();

const getSentenceCase = (str) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1).toLowerCase());
};

const getProperCase = (str) => {
    return str.split(" ").map((s) => getSentenceCase(s)).join(" ");
};

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
};
