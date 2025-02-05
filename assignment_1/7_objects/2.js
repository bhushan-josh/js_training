// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example: 
// 
// filterObject(obj) //This should return {a:”Apple”, d:”Dog”}


let obj = { 
  a:'Apple', 
  b:['Basketball','Baseball'], 
  c:{ 
      call: 'cellphone'
    }, 
  d: 'Dog' 
  } 

const filterObject = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let newObj = {};

  for(let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] != "object") {
      newObj[keys[i]] = values[i];
    }
  }
  return newObj;
}
result = filterObject(obj);
console.log(result);
