const covid = require('./utils/covid.js')
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
covid.data('Ukraine').then(output)
covid.data('Russia').then(output)
covid.data('Italy').then(output)