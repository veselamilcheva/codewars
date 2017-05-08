function kebabize(str) {
  // return
  return str.replace(/ /g,'')
  .replace(/[^a-zA-Z ]/g, '')
  .replace(/[0-9]/g, '')
  .replace(/([A-Z])/g, '-$1')
  .toLowerCase();
}

console.log(kebabize('1195egHvfqbvTJra4i'));
