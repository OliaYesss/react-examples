// /**
//  * @param {*} value
//  * @return {*}
//  */
// export default function deepClone(value) {
//   if (Array.isArray(value)) {
//     return value.map(i => deepClone(i))
//   } else if (typeof(value) === 'object' && value !== null) {
//     return Object
//       .keys(value)
//       .reduce(
//         (memo, key) => ({...memo, [key]: deepClone(value[key])}),
//         {}
//       )
//   } else {
//     return value
//   }
// }

// function delay(ms) {
//   return new Promise(res => {
//     setTimeout(() => res(), ms)
//   })
// }

// delay(3000).then(() => alert('runs after 3 seconds'));