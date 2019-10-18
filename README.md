## protoc for npm

This is a simple package that downloads `protoc` for your operating system and runs it. Having binaries in npm is rull convenient!

The versions on this package try to mirror protoc itself, though I'm very lazy so please file an issue if you need a specific version that doesn't exist.

### I just want to run protoc right now!

```sh
npx protoc-bin --python_out=./out ./path/to/descriptor.proto
```
