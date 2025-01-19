import { TextProcessor } from "../plugin";
import {
  uppercasePlugin,
  trimPlugin,
  exclamationPlugin,
} from "./example-plugins";

const processor = new TextProcessor();

processor.use(trimPlugin).use(uppercasePlugin).use(exclamationPlugin);

const result = processor.process("  hello world  ");
console.log(result); // "HELLO WORLD!"
