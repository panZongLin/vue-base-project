//import request from '../utils/request';

// function options (url, payload) {
//   return {
//       url: url,
//       method: 'post',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       data: JSON.stringify({...payload}) 
//   }
// }

export function getTableListQuest(payload) {
	console.log(payload)
	let num = 100, data = [];
	for (let i = 0; i < num; i++) {
		data.push({
			id: i,
			name: '老王' + i,
			username: '老王八' + i,
			website: 'www.baidu.com',
			phone: '123456789009',
			address: {
				city: '广州',
				street: '天河区'
			}
		})
	}
	return data
	//return request(options('/api/xxx', payload))
}