
const {usage} = require("./cmd/cli/usage")
const {readEnvironmentConfiguration} = require("./modules/configuration-reader-module");
const {storeFileJson, storeFileBin} = require("./modules/file-export-module")



const exportData = async (cmdArgs) => {
    let {tempDir, uuApp, k8s, bookkit, exports} = readEnvironmentConfiguration(cmdArgs)
//just for testing
    for (const exportObject of exports) {
       //storeFileJson(tempDir ,exportObject.name, JSON.stringify(uuApp))

        storeFileBin(tempDir ,exportObject.name, Buffer.from(JSON.stringify(uuApp), "binary"), exportObject.type)
    }


}

const help = () => {
    console.log(usage);
}

module.exports = {
    exportData,
    help
}