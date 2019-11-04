const postcss = require('postcss');

module.exports = postcss.plugin('postcss-interim', function (opts) {
   return function (root, result) {
      if (process.argv[2] && process.argv[2].trim() != "--production") {
         return;
      }

      root.walkRules(function (rule) {

         if (rule.selector.trim() === ".interim &") {

            const clonedDecls = [];
            const clonedPropertyNames = [];

            rule.walkDecls(function (decl) {
               clonedDecls.push(decl.clone());
               clonedPropertyNames.push(decl.prop);
               decl.remove();
            })

            rule.parent.walkDecls(function removeDuplicates(potentialDuplicate) {
               if(clonedPropertyNames.includes(potentialDuplicate.prop) ) {
                  potentialDuplicate.remove();
               }
            });

            clonedDecls.forEach(clonedDecl => {
               rule.parent.append(clonedDecl);
            });

            rule.remove();
         }
      });
   }
});
