const postcss = require('postcss');

module.exports = postcss.plugin('postcss-hover', function (opts) {
   return function (root, result) {
      root.walkRules(function (rule) {
         let ruleHasChanged = false;
         for (let i = 0; i < rule.selectors.length; i++) {
            if (rule.selectors[i].includes(":hover")) {
               rule.selectors[i] = rule.selector.replace(rule.selectors[i], ".desktop " + rule.selectors[i]);
               ruleHasChanged = true;
            }
         }

         if(ruleHasChanged) {
            rule.selector = rule.selectors.join(",");
         }
      });
   }
});
