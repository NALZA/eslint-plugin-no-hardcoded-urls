# eslint-plugin-no-hardcoded-urls

Lint harded coded urls in your code

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-hardcoded-urls`:

```sh
npm install eslint-plugin-no-hardcoded-urls --save-dev
```

## Usage

Add `no-hardcoded-urls` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-hardcoded-urls"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-hardcoded-urls/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


