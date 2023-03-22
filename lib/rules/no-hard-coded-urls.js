/**
 * @fileoverview disallow hard coded urls
 * @author nalza
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "disallow hard coded urls",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noHardCodedUrls: "Hard coded URLs are not allowed",
    },
    schema: [], // no options
    fixable: null, // Or `code` or `whitespace`
  },

  create(context) {
    return {
      Literal(node) {
        const { value } = node;
        if (
          typeof value === "string" &&
          (value.startsWith("http") || value.startsWith("https"))
        ) {
          if (!value.includes("${")) {
            context.report({
              node,
              messageId: "noHardCodedUrls",
            });
          }
        }
      },
    };
  },
};
