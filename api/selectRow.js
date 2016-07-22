import pool from '../configureDb'

export function selectRow(callback){
	pool.connect().then(client => {
		client.query('SELECT * FROM bookmarks')
		.then(res => {
			client.release()
			callback(res.rows)
		})
		.catch(e => {
			client.release()
			console.error('query error', e.message, e.stack)
		})
	})
}