function getExampleRef() {
  // Get hash from end of URL or generate a random one.

  var ref = new Firebase('https://side.firebaseio.com/');
  //var hash = window.location.hash.replace(/#/g , '');
  var hash = "abcde";
  alert(hash);
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.name(); // add it as a hash to the URL.
  }

  if (typeof console !== 'undefined')
    console.log('Firebase data: ', ref.toString());

  return ref;
}