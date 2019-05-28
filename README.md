# sunshine_bit@capture

> 截取指定 url 的屏幕信息,可以指定屏幕的宽和高.

## 安装

```js
npm i @sunshine_bit/capture
````

## 参数

- `options` [object]
  - url <string> default: `'https://github.com/l4503071'`(需要使用`encodeURIComponent`转义)
  - width <number> default: `375`,
  - height <number> default: `667`,
  - deviceScaleFactor <number> default: `2`,
  - fileName <string> default: `'capture.png'`,
  - encoding <string> default: 'binary',
    - 'base64': base64[string]
    - 'binary': 二进制文件[buffer]

> TODO: 其他参数覆盖,参考 (`./devices.js`)

## 事例

```js
const capture = require('@sunshine_bit/capture');
capture({
  encoding: 'base64',
}).then((data)=>{
  console.log(data)
});
```
