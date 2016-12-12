/* This script generates mock data for local development. 
	 This way you don't have to point to an actual API, 
	 but you can take advantage of randomized data and rapid
	 page loads due to local, static data. */

/* eslint-disable no-console */

import { schema } from './mockDataSchema';
import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));
console.log(json);

fs.writeFile('./src/api/db.json', json, (err) => {
	if (err) return console.log(chalk.red(err));
	console.log(chalk.green("Mock data was generated"));
});