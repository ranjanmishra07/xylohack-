const express = require('express');
const cors = require('cors')
const app = express();
const { ImageInfo } = require('./model');

app.use(cors());
app.use(express.json());
const PORT = 8000;
app.post('/', (req, res) => {
  console.log('reqqq', req.body);
  console.log(req.body.data[0]);
  const { public_id,
    version,
    format,
    type,
    width,
    height,
    secure_url,
    created_at } = req.body.data[0];

  let images = new ImageInfo({
    public_id,
    version,
    format,
    type,
    width,
    height,
    secure_url,
    created_at
  });
  images.save().then(data => res.send(data)).catch(e => res.send(e))
})

app.get('/getImages', (req, res) => {
  ImageInfo.find().then(images => res.send(images));
})

app.delete('/delete/:id', (req, res) => {
  ImageInfo.deleteOne({ public_id: req.params.id }).then(data =>
    res.send(data))
    .catch(e =>
      res.send(e))
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})