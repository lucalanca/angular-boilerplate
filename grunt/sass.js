module.exports = function () {
  "use strict";

  var sassFiles = [{
    expand : true,
    cwd    : "<%= src %>",
    src    : ["<%= css %>/**/*.scss"],
    dest   : "<%= dest %>",
    ext    : ".css"
  }];

  return {
    dev  : {
      options : {
        style : "expanded"
      },
      files   : sassFiles
    },
    prod : {
      options : {
        style : "compressed"
      },
      files   : sassFiles
    }
  };
};
