// GTA 6 meme bounty entry: copy POST.json from the repository root to /output.
// Nothing else: the house reads the post from X itself.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";

const src = new URL("./POST.json", import.meta.url).pathname;
mkdirSync("/output", { recursive: true });
copyFileSync(src, "/output/POST.json");
console.log("POST.json copied to /output");
