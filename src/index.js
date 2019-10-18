#!/usr/bin/env node

const path = require("path");
const { spawn } = require("child_process");

const BinWrapper = require("bin-wrapper");

const ver = require("../package.json").version.replace(/-.*$/, "");
const base = `https://github.com/protocolbuffers/protobuf/releases/download/v${ver}`;

const bin = new BinWrapper()
  .src(`${base}/protoc-${ver}-linux-x86_32.zip`, "linux", "x86")
  .src(`${base}/protoc-${ver}-linux-x86_64.zip`, "linux", "x64")
  .src(`${base}/protoc-${ver}-osx-x86_64.zip`, "darwin", "x64")
  .src(`${base}/protoc-${ver}-win32.zip`, "win32", "x86")
  .src(`${base}/protoc-${ver}-win64.zip`, "win32", "x64")
  .dest(path.join(__dirname, "..", "vendor"))
  .use(process.platform === "win32" ? "protoc.exe" : "protoc");

bin
  .run(["--version"])
  .then(
    _ => spawn(bin.path(), process.argv.slice(2), { stdio: "inherit" }),
    e => console.error(`Failed! ${e}`)
  );
