# SDK

JavaScript helpers in TypeScript

To use as a module:

```shell script
yarn add @jorgechen/sdk
```

## Updates

Compile and commit changes:

```sh
yarn build
git add lib/ src/
```

## Maintain

To locally develop the package, install Yalc:

```shell script
yarn global add yalc
```

Then we can publish this package locally: 

```shell script
cd sdk-js/
yalc publish
```

In the implementing project:
```shell script
yalc add @jorgechen/sdk
```
