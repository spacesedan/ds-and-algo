function mergeSortedArrays(arr1, arr2) {
  const merged = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1[i], arr2[j]);
    if (!arr2Item || arr1Item < arr2Item) {
      merged.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      merged.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  console.log(merged);
  return merged;
}

mergeSortedArrays([1, 4, 24, 69], [5, 11, 35, 80]);
