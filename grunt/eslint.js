module.exports = {
  target  : ["Gruntfile.js", "grunt/**.js", "<%= src %>/<%= js %>/**/*.js"],
  options : {
    config : ".eslint.yml"
  }
};
