import { execSync } from "node:child_process";
import { copyFileSync, existsSync, renameSync, rmSync } from "node:fs";

const apiDir = "src/app/api";
const apiBackup = ".api-build-backup";

const requiredOutputs = [
  "out/index.html",
  "out/sitemap.xml",
  "out/robots.txt",
  "out/manifest.webmanifest",
];

function cleanBuildCache() {
  if (existsSync(".next")) {
    rmSync(".next", { recursive: true, force: true });
  }
}

function hideApiRoute() {
  if (existsSync(apiDir)) {
    renameSync(apiDir, apiBackup);
  }
}

function restoreApiRoute() {
  if (existsSync(apiBackup)) {
    renameSync(apiBackup, apiDir);
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

try {
  cleanBuildCache();
  hideApiRoute();
  execSync("next build", {
    stdio: "inherit",
    env: { ...process.env, BUILD_STATIC: "true" },
  });
  copyDeployAssets();
  verifyExport();
  console.log("\nStatic export complete: upload the entire out/ folder to your web server.");
  console.log("Entry file: out/index.html");
  console.log("Sitemap: out/sitemap.xml");
} finally {
  restoreApiRoute();
}
