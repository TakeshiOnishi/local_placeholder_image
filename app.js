let express = require('express')
let app = express()
let gm = require('gm')

let debug_txt = `
=============================================
= [start placeholder server] =
= [sample] http://localhost:9999/タイトル/テキスト/300x200.png =
=============================================
`

app.get('/:title/:text/:dimension.:ext', function(request, response){
  let title = request.params.title
  let text = request.params.text
  let dimension = request.params.dimension
  let [width, height] = dimension.split('x')
  let ext = request.params.ext
  let font_size = (Math.min(width, height) / 7)

  gm(width, height, "#222")
    .font("mplus-1m-light.ttf", font_size)
    .fill("#fff")
    .drawText(0, font_size, title, 'North')
    .drawText(0, 0, text, 'Center')
    .drawText(0, 10, dimension, 'South')
    .stream(ext)
    .pipe(response);
})
app.listen(9999)
console.log(debug_txt)
