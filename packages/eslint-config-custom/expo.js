const {resolve} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
	root: true,
	env: {
		"react-native/react-native": true
	},
	extends: [
		"custom/base",
		"plugin:react/all",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	plugins: [
		"react-native",
		"react",
	],
	parserOptions: {
		project,
		ecmaFeatures: {
			"jsx": true,
		},
	},
	rules: {
		"jsx-quotes": ["error", "prefer-double"],
		"react-hooks/exhaustive-deps": "error",
		"react-native/no-color-literals": "error",
		"react-native/no-inline-styles": "error",
		"react-native/no-raw-text": ["error", {"skip": ["Heading"]}],
		"react-native/no-single-element-style-arrays": "error",
		"react-native/no-unused-styles": "error",
		"react-native/sort-styles": ["error", "asc"],
		"react-native/split-platform-components": "error",
		"react/forbid-component-props": "off",
		"react/function-component-definition": [
			"error", {
				"namedComponents": "arrow-function",
				"unnamedComponents": "arrow-function",
			},
		],
		"react/jsx-filename-extension": ["error", {allow: "as-needed", extensions: [".tsx"]}],
		"react/jsx-handler-names": "off",
		"react/jsx-indent": ["error", "tab", {checkAttributes: true, indentLogicalExpressions: true}],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-max-depth": ["error", {max: 5}],
		"react/jsx-tag-spacing": [
			"error", {
				"closingSlash": "never",
				"beforeSelfClosing": "never",
				"afterOpening": "never",
				"beforeClosing": "never",
			},
		],
		"react/no-multi-comp": ["error", {"ignoreStateless": true}],
		"react/require-default-props": "warn",
	},
	settings: {
		"import/ignore": [
			// https://github.com/facebook/react-native/issues/28549
			`${resolve(__dirname, "../..")}/node_modules/react-native/index\\.js$`,
			`${resolve(__dirname, "../..")}/node_modules/react-native/Libraries/Utilities/codegenNativeComponent\\.js$`,
			`${resolve(__dirname, "../..")}/node_modules/react-native/Libraries/Image/AssetSourceResolver\\.js$`,
		],
		react: {
			createClass: "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
			fragment: "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
			flowVersion: "0.53", // Flow version
			pragma: "React",  // Pragma to use, default to "React"
			version: "detect", // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// It will default to "latest" and warn if missing, and to "detect" in the future
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			"forbidExtraProps",
			{"property": "freeze", "object": "Object"},
			{"property": "myFavoriteWrapper"},
			// for rules that check exact prop wrappers
			{"property": "forbidExtraProps", "exact": true},
		],
		componentWrapperFunctions: [
			// The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
			"observer", // `property`
			{"property": "styled"}, // `object` is optional
			{"property": "observer", "object": "Mobx"},
			{"property": "observer", "object": "<pragma>"}, // sets `object` to whatever value `settings.react.pragma` is set to
		],
		formComponents: [
			// Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
			"CustomForm",
			{"name": "Form", "formAttribute": "endpoint"},
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			"Hyperlink",
			{"name": "Link", "linkAttribute": "to"},
		],
	},
};
