
const p = new Promise((resolve, reject) => {
  let sum = 2 + 1;
  if (sum == 4) {
    resolve('yes,this is true')
  }
  else {
    reject('no,this is not true')
  }
})
p.then((s) => {
  console.log('ha thik', s)
}).catch((error) => {
  console.log('na jog vul', error)
})