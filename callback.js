add(2, 3, displayResult)
function add(a, b, callback) {
  let result = a + b;
  callback(result)
}

function displayResult(result) {
  // console.log(result)
}

//--------------------------

function task1(callback) {
  console.log('task1 is here')
  callback()
}

function task2(callback) {
  setTimeout(() => {
    console.log('task2 is here')
    callback()
  }, 3000)


}

function task3() {
  console.log('task3 is here')
}

task1(function f1() {
  task2(function f2() {
    task3()
  })
})
