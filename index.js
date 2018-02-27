function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  setThisWithCall.call('hello', 'yo', 'no')
}