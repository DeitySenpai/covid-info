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

covid.data().then(output) //default - all data
covid.data('Russia').then(output)