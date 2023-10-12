const {resolve} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
	root: true,
	env: {
		"browser": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:ava/recommended",
		"plugin:typescript-sort-keys/recommended",
		"plugin:unicorn/recommended",
		"turbo",
		"xo",
		"xo-typescript",
	],
	plugins: [
		"@typescript-eslint",
		"ava",
		"eslint-comments",
		"import",
		"more",
		"n",
		"no-relative-import-paths",
		"no-use-extend-native",
		"promise",
		"typescript-sort-keys",
		"unicorn",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project,
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"@typescript-eslint/array-type": ["error", {default: "generic"}],
		"@typescript-eslint/ban-types": [
			"error", {
				"types": {
					"any": false,
				},
				"extendDefaults": true,
			}
		],
		"@typescript-eslint/comma-dangle": ["error", "always-multiline"],
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^_", varsIgnorePattern: "^_"}],
		"@typescript-eslint/member-ordering": ["error", {
			"default": [
				// Index signature
				"signature",
				"call-signature",

				// Fields
				"public-static-field",
				"protected-static-field",
				"private-static-field",
				"#private-static-field",

				"public-decorated-field",
				"protected-decorated-field",
				"private-decorated-field",

				"public-instance-field",
				"protected-instance-field",
				"private-instance-field",
				"#private-instance-field",

				"public-abstract-field",
				"protected-abstract-field",

				"public-field",
				"protected-field",
				"private-field",
				"#private-field",

				"static-field",
				"instance-field",
				"abstract-field",

				"decorated-field",

				"field",

				// Static initialization
				"static-initialization",

				// Constructors
				"public-constructor",
				"protected-constructor",
				"private-constructor",

				"constructor",

				// Getters
				"public-static-get",
				"protected-static-get",
				"private-static-get",
				"#private-static-get",

				"public-decorated-get",
				"protected-decorated-get",
				"private-decorated-get",

				"public-instance-get",
				"protected-instance-get",
				"private-instance-get",
				"#private-instance-get",

				"public-abstract-get",
				"protected-abstract-get",

				"public-get",
				"protected-get",
				"private-get",
				"#private-get",

				"static-get",
				"instance-get",
				"abstract-get",

				"decorated-get",

				"get",

				// Setters
				"public-static-set",
				"protected-static-set",
				"private-static-set",
				"#private-static-set",

				"public-decorated-set",
				"protected-decorated-set",
				"private-decorated-set",

				"public-instance-set",
				"protected-instance-set",
				"private-instance-set",
				"#private-instance-set",

				"public-abstract-set",
				"protected-abstract-set",

				"public-set",
				"protected-set",
				"private-set",
				"#private-set",

				"static-set",
				"instance-set",
				"abstract-set",

				"decorated-set",

				"set",

				// Methods
				"public-static-method",
				"protected-static-method",
				"private-static-method",
				"#private-static-method",

				"public-decorated-method",
				"protected-decorated-method",
				"private-decorated-method",

				"public-instance-method",
				"protected-instance-method",
				"private-instance-method",
				"#private-instance-method",

				"public-abstract-method",
				"protected-abstract-method",

				"public-method",
				"protected-method",
				"private-method",
				"#private-method",

				"static-method",
				"instance-method",
				"abstract-method",

				"decorated-method",

				"method"
			],
		}],
		"@typescript-eslint/require-array-sort-compare": "off",
		"@typescript-eslint/object-curly-spacing": [
			"error",
			"never",
			{arraysInObjects: false, objectsInObjects: false},
		],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/strict-boolean-expressions": [
			"error",
			{
				// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
				allowAny: true,
				allowNullableBoolean: true,
				allowNullableNumber: true,
				allowNullableObject: true,
				allowNullableString: true,
				allowNumber: false,
				allowString: true,
			},
		],
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
				"ignoredNodes": [
					"FunctionExpression > .params[decorators.length > 0]",
					"FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
					"ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
				],
			},
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"selector": "function",
				"format": ["PascalCase", "camelCase"],
			}, {
				"selector": "enumMember",
				"format": ["UPPER_CASE"],
			}, {
				"selector": "variable",
				"types": ["function"],
				"format": ["PascalCase", "camelCase"],
			}, {
				"selector": "variable",
				"format": ["camelCase", "PascalCase", "UPPER_CASE"],
			}, {
				"selector": "parameter",
				"format": ["camelCase"],
				"leadingUnderscore": "allow",
			},
			{
				"selector": "property",
				"format": null,
				"custom": {
					"regex": '^(_|@)?[a-z][a-zA-Z0-9]*$',
					"match": true,
				}
			},
			{
				"selector": "memberLike",
				"modifiers": ["private"],
				"format": ["camelCase"],
				"leadingUnderscore": "require",
			}, {
				"selector": "typeLike",
				"format": ["PascalCase"],
			}, {
				"selector": "default",
				"format": ["camelCase"],
			},
		],
		"@typescript-eslint/no-unsafe-argument": ["warn"],
		"@typescript-eslint/no-unsafe-assignment": ["warn"],
		"@typescript-eslint/no-unsafe-call": ["warn"],
		"@typescript-eslint/no-unsafe-return": ["warn"],
		"@typescript-eslint/sort-type-constituents": "error",
		"arrow-parens": ["error", "always"],
		"import/extensions": ["error", "never", {"json": "always"}],
		"import/no-cycle": "warn",
		"import/order": [
			"error",
			{
				"alphabetize": {
					"caseInsensitive": true,
					"order": "asc",
				},
				"groups": [
					"builtin",
					"external",
					"parent",
					"sibling",
					"index",
					"object",
					"type",
					"internal",
				],
				"newlines-between": "never",
			},
		],
		"more/no-void-map": "error",
		"more/no-c-like-loops": "error",
		"more/prefer-includes": "error",
		"more/no-then": "error",
		"more/no-window": "error",
		"more/no-numeric-endings-for-variables": "error",
		"more/no-filter-instead-of-find": "error",
		"more/force-native-methods": "error",
		"more/no-duplicated-chains": "error",
		"more/classbody-starts-with-newline": ["error", "never"],
		"more/no-hardcoded-password": "error",
		"more/no-hardcoded-configuration-data": "warn",
		"new-cap": ["error", {"capIsNew": false}],
		"no-implicit-coercion": ["error", {allow: ["!!"]}],
		"no-relative-import-paths/no-relative-import-paths": ["error", {rootDir: ".."}],
		"no-tabs": ["error", {allowIndentationTabs: true}],
		"n/prefer-global/process": ["error", "always"],
		"typescript-sort-keys/interface": ["error", "asc", {caseSensitive: false, natural: true, requiredFirst: false}],
		"typescript-sort-keys/string-enum": ["error", "asc", {caseSensitive: false}],
		"sort-keys": ["error", "asc", {caseSensitive: false, natural: true, minKeys: 2}], // https://eslint.org/docs/latest/rules/sort-keys
		"sort-vars": ["error", {ignoreCase: true}],
		"unicorn/filename-case": ["error", {"case": "kebabCase"}],
		"unicorn/no-null": "warn",
		"unicorn/no-useless-undefined": ["error", {"checkArguments": false}],
		"unicorn/prevent-abbreviations": [
			"error", {
				ignore: [
					"\w*(P|p)rops?\w*"
				]
			},
		],
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 1
			}
		]
	},
	"ignorePatterns": [
		"**/node_modules/**",
		"**/bower_components/**",
		"**/build/**",
		"flow-typed/**",
		"coverage/**",
		"{tmp,temp}/**",
		"**/*.min.js",
		"vendor/**",
		"dist/**",
		"tap-snapshots/*.{cjs,js}",
		"base.js",
		"expo.js",
		"server.js",
		"**/.eslintrc.js",
		"**/jest.config.js"
	],
};
