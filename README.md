# eslint-plugin-no-hard-coded-urls

An ESLint plugin for detecting hard-coded URLs in code. Hard-coded URLs can create dependencies on specific environments and cause bugs when deploying to different environments. This plugin can be used to ensure code portability by checking for hard-coded URLs.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-hard-coded-urls`:

```sh
npm install eslint-plugin-no-hard-coded-urls --save-dev
```

## Usage

Add `no-hard-coded-urls` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-hard-coded-urls"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "hard-coded-url/no-hard-coded-url": ["error"]
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                   | Description              |
| :----------------------------------------------------- | :----------------------- |
| [no-hard-coded-urls](docs/rules/no-hard-coded-urls.md) | disallow hard coded urls |

<!-- end auto-generated rules list -->

## Why Use eslint-plugin-hard-coded-url?

Hard-coded URLs in code can create dependencies on specific environments and cause bugs when deploying to different environments. This plugin can help prevent these issues by checking for hard-coded URLs and ensuring code portability.

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License.
