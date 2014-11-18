"use strict";

var config = {
  src  : "app",
  dest : "dist",
  css  : "css",
  js   : "js"
};

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  require("load-grunt-config")(grunt, { data : config });
};
