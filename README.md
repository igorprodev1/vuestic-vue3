# Important!!!
Need to compile `vue-class-componet` from this
`git clone --branch next https://github.com/vuejs/vue-class-component.git`
`yarn`
`yarn build` 
Then you need to replace in the project's folder `node_modules/vue-class-component/dist` with the built `dist`.
This is because we need a critical fix vuejs/vue-class-component#467

# vue-cli


![CircleCI](https://img.shields.io/circleci/build/gh/epicmaxco/vuestic-ui/develop?label=tests)
![GitHub package.json version](https://img.shields.io/github/package-json/v/epicmaxco/vuestic-ui)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
