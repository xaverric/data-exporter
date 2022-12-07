
const path = require("path");

/**
 * Read JSON file from given file path location and parse its content to the object
 *  
 * @param {string} filePath 
 * @returns 
 */

const readJsFile = filePath => {
    let data;
    try {
        data = require(filePath);

    } catch (err) {
        throw new Error(`Error occurred during loading file ${filePath}. Err: ${err}`);
    }
    return data;
};

const readEnvironmentConfiguration = cmdArgs => {

    let filePath = path.resolve(`${cmdArgs.config}/config.js`);
    return readJsFile(filePath);
};

module.exports = {
    readEnvironmentConfiguration

}