const stylelint = require("stylelint");
const ruleName = "css/interim";
const messages = stylelint.utils.ruleMessages(ruleName, {
   expected: "Interim should only be used as .interim &",
   noNestedRules: "Nested rules should not be used in interim block"
});

module.exports = stylelint.createPlugin(ruleName, () => {
   return (postcssRoot, postcssResult) => {
      postcssRoot.walkRules((rule) => {
         if (!rule.selector.includes(".interim")) {
            return;
         }

         if (rule.selector.replace(".interim &", "").trim() !== "") {
            stylelint.utils.report({
                  ruleName: ruleName,
                  result: postcssResult,
                  node: rule,
                  message: messages.expected
               });
         }

         rule.walkRules((nestedRule) => {
            stylelint.utils.report({
               ruleName: ruleName,
               result: postcssResult,
               node: nestedRule,
               message: messages.noNestedRules
            });
         })
      })
   }
})

module.exports.ruleName = ruleName
module.exports.messages = messages