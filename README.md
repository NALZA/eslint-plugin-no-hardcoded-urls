# eslint-plugin-no-hard-coded-urls

disallow hard coded urls

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
    "plugins": [
        "no-hard-coded-urls"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-hard-coded-urls/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                   | Description              |
| :----------------------------------------------------- | :----------------------- |
| [no-hard-coded-urls](docs/rules/no-hard-coded-urls.md) | disallow hard coded urls |

<!-- end auto-generated rules list -->


