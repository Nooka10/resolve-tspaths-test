const {resolve} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
	root: true,
	env: {
		"node": true,
	},
	extends: [
		"custom/base",
	],
	parserOptions: {
		project,
	},
};
