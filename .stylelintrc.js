module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "rule-empty-line-before": [
      "always",
      // {
      //   ignore: ["after-comment", "first-nested"]
      // }
    ],
  }
}