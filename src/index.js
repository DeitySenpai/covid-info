const https = require('https');
const http = require('http');
const request = (url) => new Promise((resolve, reject) => {
	(url.startsWith('https') ? https : http).get(url, (res) => {
		let rawData = '';
		res.on('data', chunk => {
			rawData += chunk
		})
		res.on('end', () => {
			resolve(rawData)
		})
	}).on('error', reject)
}) 
//ok


function sort(a, b){
	let [ aY, aM, aD, bY, bM, bD ] = [...a.date.split('-'), ...b.date.split('-')]
	aD = aD.length == 1 ? '0'+aD : aD
	bD = bD.length == 1 ? '0'+bD : bD
	return +(bY + bM + bD) - +(aY + aM + aD)
}

let url = 'https://pomber.github.io/covid19/timeseries.json'

class Covid{
	data(country = 'world'){
		return request(url)
		.then((data)=>{
			data = JSON.parse(data)
			let object = {
				country: 'World',
				newDay: {
					date: '',
					deaths: 0,
					recovered: 0,
					confirmed: 0
				},
				lastDay: {
					date: '',
					deaths: 0,
					recovered: 0,
					confirmed: 0
				}
			}
			if(!data[country]){
				let arr = Object.values(data).map(array =>{
					return [...array]
					.sort(sort)
					.slice(0,2)
				})
				for(let [n, l] of arr ){
					object.newDay.date = n.date
					object.newDay.deaths += n.deaths
					object.newDay.recovered += n.recovered
					object.newDay.confirmed += n.confirmed

					object.lastDay.date = l.date
					object.lastDay.deaths += l.deaths
					object.lastDay.recovered += l.recovered
					object.lastDay.confirmed += l.confirmed
				}
			}else{
				let [n, l] = data[country].sort(sort)
				object.newDay.date = n.date
				object.newDay.deaths += n.deaths
				object.newDay.recovered += n.recovered
				object.newDay.confirmed += n.confirmed

				object.lastDay.date = l.date
				object.lastDay.deaths += l.deaths
				object.lastDay.recovered += l.recovered
				object.lastDay.confirmed += l.confirmed

				object.country = country
			}
			return object 
		}).catch(console.error)
	}
}

module.exports = Covid