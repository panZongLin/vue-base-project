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

interface result {
	code: number,
	msg: string,
	data: object[]
}

export function getTableListQuest(payload: object) {
	console.log("payload", payload);
	let num = 100,
		result: result = {
			code: 110,
			msg: 'success',
			data: []
		};
	for (let i = 0; i < num; i++) {
		result.data.push({
			id: i,
			name: "老王" + i,
			username: "老王八" + i,
			website: "www.baidu.com",
			phone: "123456789009",
			address: {
				city: "广州",
				street: "天河区"
			}
		});
	}
	return result;
	//return request(options('/api/xxx', payload))
}
