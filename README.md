# Covid Info
---

 [`parsing from ...`](https://github.com/pomber/covid19)

### class [Covid](https://github.com/Senpaai/covid-info/blob/master/src/index.js)

#### .data(country)
> covid-19 data - confirmed, recovered, deaths
> | PARAMETR |  TYPE  |
> |----------|--------|
> | country  | String |

> **Returns** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object){<br>
>&nbsp;&nbsp;country: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String),<br>
>&nbsp;&nbsp;date: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String)<br>
>&nbsp;&nbsp;today: {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;confirmed: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String),<br>
>&nbsp;&nbsp;&nbsp;&nbsp;recovered: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String),<br>
>&nbsp;&nbsp;&nbsp;&nbsp;deaths: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String)<br>
>&nbsp;&nbsp;},<br>
>&nbsp;&nbsp;yesterday: {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;confirmed: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String),<br>
>&nbsp;&nbsp;&nbsp;&nbsp;recovered: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String),<br>
>&nbsp;&nbsp;&nbsp;&nbsp;deaths: [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String)<br>
>&nbsp;&nbsp;}<br>
>}><br>
> **Example**
```javascript
const Covid = require('./src/index.js')
const covid = new Covid()

let output = ({ today, yesterday, country, date }) => {
  console.log(`
  ${country}
  ${date}
  Confirmed: ${today.confirmed.toLocaleString()} (+${(today.confirmed - yesterday.confirmed).toLocaleString()})
  Recovered: ${today.recovered.toLocaleString()} (+${(today.recovered - yesterday.recovered).toLocaleString()})
  Deaths:    ${today.deaths.toLocaleString()} (+${(today.deaths - yesterday.deaths).toLocaleString()})
  `)
}
```
![alt-image](https://media.discordapp.net/attachments/615884194740043797/705848544036257903/unknown.png)
