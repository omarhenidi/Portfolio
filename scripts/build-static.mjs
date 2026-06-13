import { execSync } from "node:child_process";
import { copyFileSync, existsSync, rmSync } from "node:fs";

const requiredOutputs = [
  "out/index.html",
  "out/sitemap.xml",
  "out/robots.txt",
  "out/manifest.webmanifest",
  "out/favicon.ico",
  "out/og-image.png",
  "out/icon.png",
  "out/images/portrait.webp",
];

function cleanBuildCache() {
  if (existsSync(".next")) {
    rmSync(".next", { recursive: true, force: true });
  }
}

function copyDeployAssets() {
  const htaccess = "public/.htaccess";
  if (existsSync(htaccess)) {
    copyFileSync(htaccess, "out/.htaccess");
  }
}

function verifyExport() {
  const missing = requiredOutputs.filter((file) => !existsSync(file));
  if (missing.length > 0) {
    throw new Error(`Static export incomplete. Missing: ${missing.join(", ")}`);
  }
}

cleanBuildCache();
execSync("next build", { stdio: "inherit" });
copyDeployAssets();
verifyExport();
console.log("\nStatic export complete: upload the entire out/ folder to your web server.");
console.log("Entry file: out/index.html");
console.log("Sitemap: out/sitemap.xml");
