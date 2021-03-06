// Get all the elements in the document using querySelectorAll, then loop through them, getting each one's class, breaking it apart on spaces, and adding new ones to an allClasses array:
// Fount : https://stackoverflow.com/questions/38024631/finding-all-class-names-used-in-html-dom

var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

console.log(allClasses);
