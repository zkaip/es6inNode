var promise = new Promise((resolve, reject)=>{
  resolve('right')
  if(err) {throw new Error('err happens')}
})

promise
.then((msg) => {
  console.log(msg)
  return promise
})
.then(() => a)
.catch(err => console.log(err))
