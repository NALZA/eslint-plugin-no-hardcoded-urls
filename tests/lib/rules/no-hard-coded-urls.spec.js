/* eslint-env es6 */
/* eslint-disable */
/**
 * @fileoverview disallow hard coded urls
 * @author nalza
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-hard-coded-urls"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
});
ruleTester.run("no-hard-coded-urls", rule, {
  valid: [
    {
      code: `const url = process.env.API_URL;`,
    },
    {
      code: "const url = `${process.env.BASE_URL}/api/data`",
    },
    {
      code: "const url = `${baseUrl}/api/data`",
    },
    {
      code: "const url = `https://example.com/${process.env.NODE_ENV}`;",
    },
  ],
  invalid: [
    {
      code: "const url = 'https://example.com/api/data'",
      errors: [
        {
          message: "Hard coded URLs are not allowed",
        },
      ],
    },
    {
      code: "const url = `${'https://example.com'}/api/data`",
      errors: [
        {
          message: "Hard coded URLs are not allowed",
        },
      ],
    },
  ],
});
