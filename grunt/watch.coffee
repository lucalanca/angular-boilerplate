module.exports =
  bower:
    files: ["bower.json"]
    tasks: ["wiredep"]
  js:
    files: ["<%= src %>/<%= js %>/**/*.js"]
    tasks: ["js-dev"]

  css:
    files: ["<%= src %>/<%= css %>/**/*.scss"]
    tasks: ["css-dev"]
