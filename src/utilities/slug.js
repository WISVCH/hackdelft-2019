export default s => s
  .toLowerCase()
  .replace(/[^\w ]+/g,'')
  .replace(/ +/g,'-')
