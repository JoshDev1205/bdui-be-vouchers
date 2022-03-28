import * as path from 'path'
import * as fs from 'fs'
import { promisify } from 'util'

const readFileP = promisify(fs.readFile)

export const getBdUiData = async (file) => {
  const directoryPath = path.join(__dirname, `data/${file}.json`)

  try {
    const file = await readFileP(directoryPath)

    return JSON.parse(file.toString())
  } catch (error) {
    console.log('🚀 ~ file: mock.ts ~ line 14 ~ getBdUiData ~ error', error)
  }
}
