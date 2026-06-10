import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const apiDir = "src/app/api";
const apiBackup = ".api-build-backup";

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

try {
  hideApiRoute();
  execSync("next build", {
    stdio: "inherit",
    env: { ...process.env, BUILD_STATIC: "true" },
  });
  console.log("\nStatic export complete: upload the out/ folder to your web server.");
  console.log("Entry file: out/index.html");
} finally {
  restoreApiRoute();
}
