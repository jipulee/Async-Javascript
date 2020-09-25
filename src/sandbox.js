// const getTodos = (resources, callback) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText)
//         // callback(undefined, data)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         // callback('could not fetch the data', undefined)
//         reject('error getting resource')
//       }
//     })
//     request.open('GET', resources)
//     request.send()
//   })
// }

//async & await
const getTodos = async () => {
  const response = await fetch('../todos/luigi.json')
  //catch error form fetch data
  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }

  const data = await response.json()
  return data
}

getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('reject', err))


// getTodos('../todos/luigi.json').then(data => {
//   console.log('promise 1 resolved', data)
//   return getTodos('../todos/mario.json')
// }).then(data => {
//   console.log('promise 2 resolved', data)
//   return getTodos('../todos/shaun.json')
// }).then(data => {
//   console.log('promise 3 resolved', data)
// }).catch(err => {
//   console.log('promise rejected', err)
// })




//fetch api only reject for network error!
// fetch('../todos/luigi.json').then((response) => {
//     console.log('resolved', response)
//     return response.json()
//   }).then(data => {
//     console.log('the data is', data)
//   })
//   .catch((err) => {
//     console.log('rejected', err)
//   })

//call back hell

// getTodos('../todos/luigi.json', (err, data) => {
//   console.log(data)
//   getTodos('../todos/mario.json', (err, data) => {
//     console.log(data)
//     getTodos('../todos/shaun.json', (err, data) => {
//       console.log(data)
//     })
//   })
// })


//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something
//     resolve('some data')
//     reject('some error')
//   });
// }

// getSomething().then((data) => {
//   console.log(data)
// }, (err) => {
//   console.log(err)
// })

// getSomething().then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })