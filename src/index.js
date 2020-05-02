const https = require('https');

function sort(array){
	return array.sort((a, b) => {
		let [ aY, aM, aD, bY, bM, bD ] = [...a.date.split('-'), ...b.date.split('-')]
		aD = aD.length == 1 ? '0'+aD : aD
		bD = bD.length == 1 ? '0'+bD : bD
		return +(bY + bM + bD) - +(aY + aM + aD)		
	})
}

class Covid{
	data(country = 'World'){
		return new Promise((resolve, reject) => {
			https.get('https://pomber.github.io/covid19/timeseries.json', res => {
				let rawData = '';
				res.on('data', data => { rawData += data });
				res.on('end', () => { resolve(rawData) });
			}).on('error', reject);
		}).then((data) => {
			data = JSON.parse(data)
			let day = {
				deaths: 0,
				recovered: 0,
				confirmed: 0
			}
			let object = {
				country: 'World',
				date: null,
				today: { ...day},
				yesterday: { ...day}
			}
			if(!data[country]){
				for(let [today, yesterday] of Object.values(data).map(sort)){
					for(let key in today) object.today[key] += today[key];
					for(let key in yesterday) object.yesterday[key] += yesterday[key];
					object.date = today.date;
				}
			}else{
				let [today, yesterday] = sort(data[country])
				for(let key in today) object.today[key] = today[key];
				for(let key in yesterday) object.yesterday[key] = yesterday[key];
				object.date = today.date;
				object.country = country
			}
			return object 
		}).catch(console.error)
	}
}

module.exports = Covid