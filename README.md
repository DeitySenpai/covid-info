# Covid Info
---

### [ [parsing from ...](https://github.com/pomber/covid19) ]

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

covid.data('Russia').then(output)
// covid.data() - Default - 'World'
```
![alt-image](https://media.discordapp.net/attachments/615884194740043797/705848544036257903/unknown.png)
