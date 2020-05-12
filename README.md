# suzune-api
## Private API

```
npm install Bi-nz/suzune-api --save
```

```js
const suzuneAPI = require('suzune-api')
const api = new suzuneAPI('bot_id', 'token')

api.SFW('hug').then(url => {
    console.log(url)
})

api.Animal('shibe').then(url => {
    console.log(url)
})
```
