function compose(arr) {

  return dispatch(0)

  function dispatch(i) {
    var fn = arr[i];
    if (!fn) {
      return Promise.resolve();
    }

    fn(function next() {
      // return Promise.resolve(dispatch(i + 1))
      return dispatch(i + 1)
    })
  }
}

async function fun1(next) {
  console.log(1)
  await next();
  console.log(5)
}

async function fun2(next) {
  console.log(2)
  await next();
  console.log(4)
}

async function fun3(next) {
  // console.log('1')
  // await next();
  console.log(3)
}

compose([fun1, fun2, fun3])

new Promise(resolve => {
  resolve(1)
}).then(res => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1111)
    }, 1000);
  })
}).then(res => {
  console.log('res', res);
})

async function fn4() {
  var data = await fn5();
  return data;
}

async function fn5() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('fn5');
    }, 3000);
  })
}

fn4().then(res => {
  console.log('res', res);
})
