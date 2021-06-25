let isDevelopment = process.argv.includes("--dev");

require("esbuild").buildSync({
  entryPoints: ["index.js"],
  bundle: true,
  outfile: "dist/index-esbuild.js",
  define: {
    "process.env.NODE_ENV": isDevelopment ? '"development"' : '"production"',
  },
  minify: !isDevelopment,
  sourcemap: isDevelopment && "inline",
});
