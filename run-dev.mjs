import { spawn } from "node:child_process";

const rawArgs = process.argv.slice(2);
const normalizedArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === "--host") {
    normalizedArgs.push("-H");
  } else {
    normalizedArgs.push(arg);
  }
}

// Ensure default port and host bindings
if (!normalizedArgs.includes("-p") && !normalizedArgs.includes("--port")) {
  normalizedArgs.push("-p", "3000");
}
if (!normalizedArgs.includes("-H") && !normalizedArgs.includes("--hostname")) {
  normalizedArgs.push("-H", "0.0.0.0");
}

const child = spawn("./node_modules/.bin/next", ["dev", ...normalizedArgs], {
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  child.kill("SIGINT");
});

process.on("SIGTERM", () => {
  child.kill("SIGTERM");
});
