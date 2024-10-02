import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const dotenvPath = path.resolve(__dirname, '.env');

console.log("dotenvPath: ", dotenvPath);
dotenv.config({ path: dotenvPath });

const PORT = process.env.SERVER_PORT || 8080; // Default port if not specified
const ENV_VARIABLES = process.env;

// Export the variables
export {
    path,
    ENV_VARIABLES,
    PORT,
};
