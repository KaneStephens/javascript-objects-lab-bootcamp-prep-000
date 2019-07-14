var recipes = { foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign(object, {  )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

