const optimizeString = (str = '', length = 10) => (str.length > length ? `${ str.slice(0, length) }...` : str);

const helperFunctions = {
    optimizeString,

};

export default helperFunctions;
