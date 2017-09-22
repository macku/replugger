# replugger

[![npm version](https://img.shields.io/npm/v/replugger.svg)](https://www.npmjs.com/package/replugger)
[![npm dependencies](https://img.shields.io/david/macku/replugger.svg)](https://david-dm.org/macku/replugger)
[![npm dev dependencies](https://img.shields.io/david/dev/macku/replugger.svg)](https://david-dm.org/macku/replugger?type=dev)
[![Build Status](https://travis-ci.org/macku/replugger.svg)](https://travis-ci.org/macku/replugger)
[![Coverage Status](https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_100.svg)](https://coveralls.io/github/macku/replugger?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/macku/replugger.svg)](https://greenkeeper.io/)

## React pluggable application made easy!

The [replugger](https://github.com/macku/replugger) library was made to allow building React pluggable application. Build your own application or product but allow to extend it easily. Each part of your React application can contain **Slot** placeholder that can be filled by **external plugins**.

The API of the replugger library allows your plugin the decide how the would like to fill the slot. It can a small component like a link or even a full widget that will contain own **Slots**. You can fill the **Slot** with a component that can contain another **Slot** inside it!

The library also takes care of **additional routes** provided by the plugin. Let's assume your plugin would like to add an additional page to your application. Thanks to the [JavaScript Decorators](https://github.com/wycats/javascript-decorators) you can export any page with a unique route URL.

### Features

TBA

### Road map

TBA


### How to install

#### NPM and Yarn

You can install the library using **NPM**:

```bash
npm install replugger -S
```

or if you prefer yarn:

```bash
yarn add replugger
```

### How to use it

TBA

### Examples

#### Demo application with two plugins

Check the [live example](https://stackblitz.com/edit/replugger-demo-app) of the demo application [(source)](https://github.com/macku/replugger/tree/master/packages/demo-app).

### Source

The [replugger](https://github.com/macku/replugger) and its sub-packages are distributed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

For a full list of packages, see [the GitHub source](https://github.com/macku/replugger/tree/master/packages).
