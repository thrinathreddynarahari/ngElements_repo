const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/protactor/runtime.js",   //change path of your runtime.js
    "./dist/protactor/polyfills.js", //change path of your polyfills.js
    "./dist/protactor/main.js",      //change path of your main.js
  ];

  await fs.ensureDir("login");                     //change dirctory name
  await concat(files, "login/login-widget1.js");   //change path
};
build();
