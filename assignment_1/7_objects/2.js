// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
//
// filterObject(obj) //This should return {a:”Apple”, d:”Dog”}

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

const filterObject = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => typeof value !== "object")
  );
const result = filterObject(obj);
console.log(result);
