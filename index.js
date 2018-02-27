function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  setThisWithCall.call('Bob', 'yo', 'Bob')
}
