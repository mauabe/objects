const makeToDos = function(owner, toDos) {
  return {
    owner: owner,
    toDos: toDos,
    generateHtml: function() {
      var html = '<ul>';
      this.toDos.forEach(function(todo) {
        html+= '<li>' + todo + '</li>';
      });
      return html + '</ul>';
    }
  }
}



// tests

function testIt() {
  var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
  var owner = 'Steve';
  var myToDos = makeToDos(owner, toDos);
  if (!myToDos || !myToDos instanceof Object) {
    console.error('FAILURE: `makeToDos` must return an object');
    return;
  }
  
  var expectedKeys = ['owner', 'toDos', 'generateHtml'];
  var missingKeys = expectedKeys.filter(function(key) {
    return Object.keys(myToDos).indexOf(key) < 0;
  });
  
  if (missingKeys.length > 0)
  {
    console.error(
      'FAILURE: `makeToDos` missing following keys: ' + missingKeys.join(', '));
    return;
  }
  
  if (myToDos.owner !== owner) {
    console.error(
     'FAILURE: expected `makeToDos` to return an object with `.owner` '+
     'set to value passed in for `owner`, in this case ' + owner);
    return;
  }
  if (!toDos.every(function(toDo) {
    return myToDos.toDos.find(function(_toDo) {
      return _toDo === toDo;
    })
  })) { 
    console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
  }
  
  var element = $(myToDos.generateHtml());

  if (element.length !== 1) {
    console.error(
      'FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
      'method that returns an unordered list');
    return;
  }

  if (!toDos.every(function(toDo) {
    return element.find('li:contains("' + toDo + '")').length === 1;
  })) {
    console.error('FAILURE: generateHtml must return li element for every todo');
    return
  }

  console.log('SUCCESS: `makeToDos` is working');
  
}

testIt();