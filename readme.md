# cra-jest-esm

I have a `create-react-app` that uses an external, local package, `tem`, short for "Test ECMAScript Module". TEM uses [the `esm` package](https://www.npmjs.com/package/esm).

# Problem

I want to use the included Jest test module in CRA to test my app, but it fails on my `tem` package, because it's ESM. I can't figure out how to properly configure `react-scripts test` to allow ESM, as described on [the Jest documentation](https://jestjs.io/docs/ecmascript-modules).

# Repro Steps

1. clone `https://github.com/arcandio/cra-jest-esm.git`
2. `cd cra-jest`
3. `npm run test`
4. observe output, which should report the test suite failed to run and ouput the following error.

```
    F:\freelance\repos\sgs-web-prototypes\cra-jest\tem\src\core.js:1
    Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: F:\freelance\repos\sgs-web-prototypes\cra-jest\tem\src\core.js
    require() of ES modules is not supported.
    require() of F:\freelance\repos\sgs-web-prototypes\cra-jest\tem\src\core.js from F:\freelance\repos\sgs-web-prototypes\cra-jest\tem\index.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
    Instead rename core.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from F:\freelance\repos\sgs-web-prototypes\cra-jest\tem\package.json.
```