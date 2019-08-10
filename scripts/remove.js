#!/usr/bin/env node

const fs = require("fs");

fs.unlink("GumshoeSRD.md", err => {
  if (err) throw err;
  console.log("GumshoeSRD.md was deleted");
});
