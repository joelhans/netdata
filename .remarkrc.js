// Source: https://github.com/codacy/codacy-remark-lint/raw/master/.remarkrc.js

exports.settings = {
  gfm: true,
  commonmark: true,
  looseTable: false,
  spacedTable: false,
  paddedTable: false,
  fences: true,
  rule: '-',
  ruleRepetition: 3,
  emphasis: "*",
  strong: "*",
  bullet: "-",
  listItemIndent: 'tab',
  incrementListMarker: true
};

exports.plugins = [
  require("remark-preset-lint-consistent"),
  require("remark-preset-lint-recommended"),
  remarkPresetLintMarkdownStyleGuide,
  [require("remark-lint-no-dead-urls"), { skipOffline: true }],
  require("remark-lint-heading-whitespace"),
  [require("remark-lint-maximum-line-length"), 120],
  [require("remark-lint-maximum-heading-length"), 120],
  [require("remark-lint-list-item-indent"), "tab-size"],
  [require("remark-lint-list-item-spacing"), false],
  [require("remark-lint-strong-marker"), "*"],
  [require("remark-lint-emphasis-marker"), "_"],
  [require("remark-lint-unordered-list-marker-style"), "-"],
  [require("remark-lint-ordered-list-marker-style"), "."],
  [require("remark-lint-ordered-list-marker-value"), "ordered"],
  require("remark-validate-links"),
  require("remark-frontmatter"),
];
