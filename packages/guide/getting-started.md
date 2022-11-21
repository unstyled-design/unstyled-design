# Getting Started

## Version

[![unstyled-design version badge](https://img.shields.io/npm/v/unstyled-design.svg?style=flat-square)](https://www.npmjs.org/package/unstyled-design)

## Installation

``` bash
# npm
$ npm install unstyled-design --save

# yarn
$ yarn add unstyled-design

# pnpm
$ pnpm install unstyled-design
```

## Usage

``` ts
// main.ts
import { createApp } from 'vue'
import unstyled from 'unstyled-design'
import 'unstyled-design/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(unstyled)
app.mount('#app')
```
