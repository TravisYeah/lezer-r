import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

export default {
  input: "./src/parser.js",
  output: [
    { format: "cjs", file: "./dist/index.cjs" },
    { format: "es", file: "./dist/index.es.js" },
  ],
  external(id) {
    return !/^[\.\/]/.test(id);
  },
  plugins: [
    nodeResolve(),
    copy({ targets: [{ src: "src/highlight.js", dest: "dist/" }] }),
  ],
};
