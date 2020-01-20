/**
 * Sort asn array of objects by object key
 * @param array - array to sort
 * @param key - the name of the object key to sort the array items by
 * @return sorted array
 */
function sortByKey(array, key) {
  return array.sort(function(a, b) {
    let x = a[key]; let y = b[key];
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
}
