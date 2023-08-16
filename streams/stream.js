import fs from 'fs'
import { createGzip } from 'zlib';

import { Transform } from 'stream'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

const fileName = 'info.txt'


// Get the directory name of the current ES module file
const currentModuleFile = fileURLToPath(import.meta.url);
const currentFolderPath = dirname(currentModuleFile);
const filePath = path.join(currentFolderPath,fileName)

const printProgress = new Transform({
    transform(chunk, encoding, cb) {
        process.stdout.write("processing\n")
        cb(null, chunk)
    }
})

export function createFile() {
    fs.createReadStream(filePath)
        .pipe(createGzip())
        .pipe(printProgress)
        .pipe(fs.createWriteStream(filePath + ".zip"))
        .on("finish", () => console.log("File processing complete"))
    }