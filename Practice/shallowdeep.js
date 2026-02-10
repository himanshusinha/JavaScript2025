// Shallow copy: nested object shares the same reference, so changes affect both
// Deep copy: nested object has a different reference, so original remains unchanged
// deepcopy me original change nahi hoga value shallow me change ho jayega

// Shallow copy: nested object same reference hota hai
let originalObj = {
  name: "Himanshu",
  address: { city: "Indore" },
};

let shallowCopy = { ...originalObj };

// Deep copy: nested object bhi naya hota hai
let deepCopy = JSON.parse(JSON.stringify(originalObj));

// Change nested value in original
originalObj.address.city = "Mumbai";

console.log(shallowCopy.address.city); // Mumbai ❌ (changed)
console.log(deepCopy.address.city); // Indore ✅ (safe)
