function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    if (currentValue < pivot) {
      left.push(currentValue);
    } else if (currentValue >= pivot) {
      right.push(currentValue);
    }
  }

  // Recursively sort the left
  const leftPart = quicksort(left);

  // Recursively sort the right
  const rightPart = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...leftPart, pivot, ...rightPart];
}

module.exports = [quicksort];
