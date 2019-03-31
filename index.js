require("colors");
const diff = require("diff");

const args = process.argv;
args.splice(0, 2);

function color({ added, removed }) {
  if (added) {
    return "green";
  } else if (removed) {
    return "red";
  }
  return "grey";
}

const strings = args.splice(0, 2);
const diffChars = diff.diffChars(...strings);
diffChars.forEach(chunk => process.stderr.write(chunk.value[color(chunk)]));
console.log();
