function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call('Bob', 'yo', 'Bob')
}
