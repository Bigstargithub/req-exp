const str = `
010-1234-5678
test@gmail.com
https://www.naver.com/?s=frozon
The quick brown fox jumps over the lazy dog
abbcccdddd
hxyp
동해물과 백두산이 마르고 닳도록
`
// const h = `  the hello  world   !

// `
// const regexp = new RegExp('the', 'gi')
// const regexp = /fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))

console.log(str.match(/(?<=@).{1,}/g))