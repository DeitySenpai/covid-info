# Covid Info
---

### [[parsing from ...](https://github.com/pomber/covid19)]

## example

```javascript
const Covid = require('./bin/index.js')
const covid = new Covid()

/*
covid.data() return <Promise Object>

Object: {
	date: String,
	deaths: String,
	recovered: String,
	deaths: String
}
*/

let output = ({ newDay, lastDay, country } = {}) => {
	console.log(`
${country}
${newDay.date}
Confirmed: ${newDay.confirmed.toLocaleString()} (+${(newDay.confirmed - lastDay.confirmed).toLocaleString()})
Recovered: ${newDay.recovered.toLocaleString()} (+${(newDay.recovered - lastDay.recovered).toLocaleString()})
Deaths:    ${newDay.deaths.toLocaleString()} (+${(newDay.deaths - lastDay.deaths).toLocaleString()})
`)
}

covid.data().then(output) //default - all data
covid.data('Russian').then(output)
```
