//@ts-check
import { input, select } from "@inquirer/prompts";
import path from "node:path";
import fs from "node:fs";

const types = ["js", "ts", "react", "vue"];
const typesChoices = types.map((type) => ({
  name: type,
  value: type,
}));

const type = await select({
  message: "请选择题目类型",
  choices: typesChoices,
});

const answer = await input({
  message: "请输入题目",
});

const __dirname = new URL(".", import.meta.url).pathname;
const basePath = path.join(__dirname, "../");

const typePath = path.join(basePath, type);
const answerPath = path.join(typePath, answer);
if (!fs.existsSync(typePath)) {
  fs.mkdirSync(typePath);
}

if (!fs.existsSync(answerPath)) {
  fs.mkdirSync(answerPath);
} else {
  console.log("题目已存在");
  process.exit(1);
}

if (type === "js") {
  fs.appendFileSync(path.join(answerPath, "index.js"), "");
}
