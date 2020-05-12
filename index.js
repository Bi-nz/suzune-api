const {get} = require('request')

module.exports = class {
	constructor(id, key) {
		this.id = id
		this.key = key
	}

	/**
	 * @param {('cuddle'|'feed'|'hug'|'kiss'|'pat'|'poke'|'slap'|'smug'|'tickle')} type
	 */
	async SFW(type) {
		return new Promise(async (resolve, reject) => {
			await get(`https://api.ukiyooo.net/?type=${type}`, {headers: {id: this.id, key: this.key, type: 'SFW'}}, (err, res, body) => {
				if (err || String(body).indexOf('https://api.ukiyooo.net') !== 0)
					return reject('INVALID_TYPE')
				return resolve(body)
			})
		})
	}

	/**
	 * @param {('bird'|'cat'|'dog'|'shibe'|'fox')} type
	 */
	async Animal(type) {
		return new Promise(async (resolve, reject) => {
			await get(`https://api.ukiyooo.net/?type=${type}`, {headers: {id: this.id, key: this.key, type: 'Animal'}}, (err, res, body) => {
				if (err || String(body).indexOf('https://api.ukiyooo.net') !== 0)
					return reject('INVALID_TYPE')
				return resolve(body)
			})
		})
	}
}