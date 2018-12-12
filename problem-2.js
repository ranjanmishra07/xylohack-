function filemerger(filesArray = {}) {
  const fileName = Object.keys(filesArray).filter(i => i.endsWith('.md')).join('')
                    .replace(/.md([a-z])/g, g => g[3].toUpperCase());                 
  let filecontents = [];
  Object.keys(filesArray).filter(i => i.endsWith('.md')).forEach(i => {
    filesArray[i].forEach(j => {
      j = j.replace(/[$]/g, '');
      filecontents.push(j);
    });
  });
  const tmp = { [fileName]: filecontents }
  return tmp;
}
const testFileArray = { 'foo.md': ['a$s', 'a$f'], 'bar.md': ['a$y', 'b$$gkk'], 'car.md': ['fff', 'gg$tt'], 'd.m': ['a'] };
console.log(filemerger(testFileArray));

//grab all the files of type .md file , create a new .md file with
// camelcase and get all the contents without the special characters
// of .md file inside the new file 