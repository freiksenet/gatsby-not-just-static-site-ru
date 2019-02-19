import s1 from "./topics/01-intro.mdx";
import s2 from "./topics/02-what-is-gatsby.mdx";
import s3 from "./topics/03-static-site-generator.mdx";
import s4 from "./topics/04-plugins-sources.mdx";
import s5 from "./topics/05-community.mdx";
import s6 from "./topics/06-end.mdx";

export { default as theme } from "gatsby-mdx-theme";

export default [
  ...require("./topics/01-intro.mdx").default,
  ...require("./topics/02-what-is-gatsby.mdx").default,
  ...require("./topics/03-static-site-generator.mdx").default,
  ...require("./topics/04-plugins-sources.mdx").default,
  ...require("./topics/05-community.mdx").default,
  ...require("./topics/06-end.mdx").default
];
