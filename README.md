# Dummy PlaceHolder Image For Local

---

Used when generating dummy placeholder images in the local environment

[【npm package】](https://www.npmjs.com/package/local_placeholder_image)

## Demo

![sample](./sample.png)

## Requirement

+ [aheckmann/gm](https://github.com/aheckmann/gm)
  + imagemagick
  + graphicsmagick

## Usage

1. Install `imagemagick` and `graphicsmagick`
    + For Mac
        1. `brew install imagemagick`
        1. `brew install graphicsmagick`
1. `npm i local_placeholder_image`
1. `local_placeholder_image start`
1. Access Image
    + `http://localhost:9999/タイトル/テキスト/300x200.png`
    + `<img src="http://localhost:9999/タイトル/テキスト/300x200.png" />`

```
local_placeholder_image start

Options:
  -p, --port <value>  PORT Number (default: 9999)
  -h, --help          output usage information
```

### Attention

+ Even if `imagemagick` or` graphicsmagick` is not installed, `express` itself starts, but the image is not displayed and only a blank page is displayed.

## Anything Else

+ [(Font) M+ Font](http://mplus-fonts.osdn.jp/about.html)

## Author

[TakeshiOnishi](https://github.com/TakeshiOnishi)

## License

[MIT](https://github.com/TakeshiOnishi/dotfiles/blob/master/etc/template/LICENSE.txt)
