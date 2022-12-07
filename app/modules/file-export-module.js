const fs = require("fs");
const path = require("path");

/**
 * Create directory on given path recursively if does not exist.
 *
 * @param directoryPath
 */
const createDirectoryIfNotExist = directoryPath => {

    if (!fs.existsSync(directoryPath)) {
        console.log(`Directory structure ${directoryPath} does not exist.`);
        fs.mkdirSync(directoryPath, { recursive: true });
        console.log(`Directory structure ${directoryPath} created.`);

    }
}

const getFilePath = (directory, fileName) => {
    return path.resolve(directory, fileName);
}

/**
 * Stores file with given filename into the given location. In case the folder does not exist, it gets created recursively.
 *
 * @param directory
 * @param fileName
 * @param content
 */
const storeFileJson = (directory, fileName, content) => {
    createDirectoryIfNotExist(directory);
    fs.writeFileSync(getFilePath(directory, fileName), content);
    console.log(`File ${fileName} stored successfully into the "${directory}" location.`);
}
const storeFileBin = (directory, fileName, content, encoding) => {
    createDirectoryIfNotExist(directory);
    let bufferdContent = Buffer.from(content, encoding)
    fs.writeFileSync(getFilePath(directory, fileName), bufferdContent);
    console.log(`File ${fileName} stored successfully into the "${directory}" location.`);
}

module.exports = {storeFileJson, getFilePath, storeFileBin}