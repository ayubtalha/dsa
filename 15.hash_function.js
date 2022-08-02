function hash(key, arrayLeng) {
  let total = 0;
  // using prime number to avoid collisions
  let WEIRD_PRIME = 31;
  // only going to loop for first 10 characters
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    // map "a" to 1,"b" to 2, "c" to 3
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLeng;
  }
  return total;
}
