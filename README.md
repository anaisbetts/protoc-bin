## protoc for npm

This is a simple package that downloads `protoc` for your operating system and runs it. Having binaries in npm is rull convenient!

The versions on this package try to mirror protoc itself, though I'm very lazy so please file an issue if you need a specific version that doesn't exist.

### I just want to run protoc right now!

```sh
npx protoc-bin --python_out=./out ./path/to/descriptor.proto
```

### Greetz and anti-greetz

This project is largely a use of the `bin-wrapper` package by @kevva, thanks for the great library!

This project is not sponsored or represented by Google in any way.
