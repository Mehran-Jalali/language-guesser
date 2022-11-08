import franc from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];

const langCode = franc(input);

// 'und' means UNDetermind
if (langCode === "und") {
  console.log(`Sorry, Couldn't figure it out! Try with more sample text!`.red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is`.green, language.name.rainbow);
}
