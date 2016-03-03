var si = require('seneca')()
si.use('mysql-store', {
  name: 'senecatest',
  host: 'localhost',
  user: 'senecatest',
  password: 'senecatest',
  port: 3306,
  map: {'-/-/foo':'*'}
})

si.use('mem-store', {
  map:{'-/-/bar':'*'}
})

// si.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
//   respond(null, {answer: 1})
// })

// // in postgres-store
// si.act({role: 'math', cmd: 'sum', target:'test'}, function (err, result) {
//   console.log(result)
// })

si.ready(function() {
  console.log('### ready')
  var foo1 = si.make$('foo')
  foo1.p1 = 'v1'
  foo1.p3 = 'v3'

  foo1.save$(function(err, foo2) {
    console.log(foo2)
  })
})
