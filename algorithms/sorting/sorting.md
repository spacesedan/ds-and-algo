# Sorting

_Issues with sort()_

In javascript the sort() converts the items in the array into strings, this can be a potential pitfall when trying to sort an array of numbers, since it superficial check. the sort() turns an item into an array and checks the first index and comparse its unicode value with the other items in the same array and orders them from low to high by default. It doesn't check the actual value of the index.

**Bubble Sort**
Should never be used, its only purpose is educative, as a way to teach sorting. Not efficient

**Selection Sort**
Same as bubble sort should only be used as a teaching mechanism. Used to build a foundation

**Insertion Sort**
Should be used when the dataset it small, or when the dataset is partially sorted, in this case it is really fast. Uses little space and also easy to implement.

- When to use:
  - Small data sets
  - Partially sorted dataset

**Merge Sort**
It is good becasue of divide and conquer. It is fast, in the best and worst case it always has a time complexity of O(n log n). When you are worried about worst case scenarios, erge sort is the best sorting algorithm to use since the time complexity is predictable. Best if used on external systems and not on your own machine because while it is good in time complexity it is bad in Space complexity.

**Quick Sort**
Better than merge sort in some aspects, but its down side comes when the pivot point used for sorting is picked correctly and causes the sorting to slow down, slower than Merge Sort with a time complexity of O(n^2). If worst case is a factor the developer is better off using a different sorting algorithm.
