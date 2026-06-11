import { existsSync, rmSync } from "node:fs";

const productionMarkers = [
  ".next/BUILD_ID",
  ".next/export-marker.json",
  ".next/server/app",
];

const hasProductionCache = productionMarkers.some((path) => existsSync(path));
const hasDevCache = existsSync(".next/static/development");

if (hasProductionCache && !hasDevCache) {
  console.log("Clearing production .next cache before starting dev server...");
  rmSync(".next", { recursive: true, force: true });
}
