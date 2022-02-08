# Sliding Window

## Overwiew

Sliding window is an extension of the two pointer approach where we use two pointers (left and right) to create a "window". **The problem will ask us to return the maximum or minimum subrange that satisfies the given condition.** the sliding window involves and contracting our "window" to find the optimal range.

Silding window is useful for finding **subarray** in an **array** that satisfy given conditions. They maintain a subset of items as you window and resize and move that window within the larger list unitl you find a solution

It is a subset of dymanic programming(Technique of solving a problem via dividing it into subproblems).

**These are frequently asked in interviews.**

Time Complexity: O(n)

Space Complexity: O(1)

Can be identified amongst subarray/substring related questions.

- Can be applied minimum, maximun, common subarray, substring type of question

## TIPS

### Requirements

**Ask fo clarification**

- Analyze the requirements even in simple questions, they might not be so simple
- Subarrays are **contiguous** by definition so the elements shoul be adjacent
- Inputs could be anything and can also be infinite, and aren't always provided by the interviewer
- List the requirments on the whiteboard

### Analysis

- Input size is unlimited, so memeory can blow up ig we are note careful of what we keep in memory.
  - Do not precalculate and store all possible variations beforehand(in other words do not try to bruteforce the solution)
  - Do not use recursion, some programming languages have limits to their call stack so this will crash the program before it finishs(Node has a limit of 50,000 items it can hold in its call stack)
- Think through all the data structures that can be utilized in this solution
