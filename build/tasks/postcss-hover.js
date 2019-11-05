const postcss = require('postcss');

module.exports = postcss.plugin('postcss-hover', () => {
   return (root) => {
      root.walkRules((rule) => {
         if (rule.selector.includes(":hover")) {
            const updatedSelectors = [];
            for (let i = 0; i < rule.selectors.length; i++) {

               if (rule.selectors[i].includes(":hover")) {
                  updatedSelectors[i] = ".mouseMode " + rule.selectors[i];
               }
               else {
                  updatedSelectors[i] = rule.selectors[i];
               }
            }

            rule.selector = updatedSelectors.join(",");
         }
      });
   }
});
