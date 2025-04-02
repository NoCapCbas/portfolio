---
title: Solve any Data Structure and Algorithm problem
excerpt: A framework I've learned for tackling any Data Structure and Algorithm problem
publishDate: 'Jan 17 2025'
tags:
  - dsa
  - data structures
  - algorithms
  - computer science
  - programming
  - algorithms
  - python
  - javascript
isFeatured: true
---


## Tackling a DSA problem
The best framework i've learned for tackling DSA problems is the engineering method, I first learned about this method from [formation.dev](https://formation.dev/c/v1t32sp5).
How I personally use this method to solve DSA problems is to set a timer for 15 minutes to implement this framework on a problem. If I can not solve the problem within the time, I will look at the solution and try to understand it and revisit the problem a later day to try again.

The engineering method consists of 5 steps:
    1. Explore
    2. Brainstorm
    3. Plan
    4. Implement
    5. Test

To demonstrate this method, I'll be using the following problem:
Problem:
"Given an array of integers, return the indices of the two numbers that add up to a given target."

### 1. Explore
Exploring the problem consists of making sure you truly understand the problem. List out test cases and edge cases. Then list the input and expected output for each test case.

Using the problem statement from above, we can list out the following test cases:
```
Input: [2, 7, 11, 15], target = 9
Output: [0, 1]

Input: [3, 2, 4], target = 6
Output: [1, 2]

Input: [3, 3], target = 6
Output: [0, 1]

Input: [], target = 1
Output: []
```

This allows you to begin to understand the problem and what steps are needed to solve it.

### 2. Brainstorm
Brainstorming the problem consists of thinking about the problem and coming up with multiple possible solutions.

Using the problem statement from above, we can come up with the following solutions:
- Brute force: 
    - Description: Iterate through the array and check if the sum of the current element and the next element equals the target. If it does, return the indices of the two numbers.
    - Time complexity: O(n^2)
    - Space complexity: O(1)
- Hash map: 
    - Description: Create a hash map to store the indices of the numbers in the array. Then iterate through the array and check if the complement of the current element (target - current element) exists in the hash map. If it does, return the indices of the two numbers.
    - Time complexity: O(n)
    - Space complexity: O(n)

This allows you to begin to think about the problem and come up with multiple possible solutions. Even if the first solution you come up with is the best, it's still important to consider other possible solutions and their possible tradeoffs.

### 3. Plan
Planning the problem consists of choosing the best solution for the problem.

Using the solutions from above, we can choose the hash map solution as it has a better time complexity than the brute force solution.

We will now psuedocode the solution using comments.

```python
#python
# Hash map solution
def two_sum(nums, target):
    # Create a hash map to store the indices of the numbers in the array
    # Iterate through the array
        # Check if the complement of the current element exists in the hash map
        # Add the current element to the hash map
```

```javascript
//javascript
// Hash map solution
function two_sum(nums, target):
    // Create a hash map to store the indices of the numbers in the array
    // Iterate through the array
        // Check if the complement of the current element exists in the hash map
        // Add the current element to the hash map
```

### 4. Implement
Implementing the solution consists of writing the code for the solution.

```python
#python
# Hash map solution
def two_sum(nums, target):
    # Create a hash map to store the indices of the numbers in the array
    num_map = {}
    # Iterate through the array
    for i, num in enumerate(nums):
        # Check if the complement of the current element exists in the hash map
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        # Add the current element to the hash map
        num_map[num] = i
    return []
```

```javascript
//javascript
// Hash map solution
function two_sum(nums, target):
    // Create a hash map to store the indices of the numbers in the array
    const num_map = {}
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the complement of the current element exists in the hash map
        const complement = target - nums[i]
        if (num_map[complement] !== undefined) {
            return [num_map[complement], i]
        }
        // Add the current element to the hash map
        num_map[nums[i]] = i
    }
    return []
```

### 5. Test
Testing the solution consists of testing the solution with the test cases.

Using the test cases from above, we can test the solution with the following code:

```python
#python
print(two_sum([2, 7, 11, 15], 9)) # Output: [0, 1]
print(two_sum([3, 2, 4], 6)) # Output: [1, 2]
print(two_sum([3, 3], 6)) # Output: [0, 1]
print(two_sum([], 1)) # Output: []
```

```javascript
//javascript
console.log(two_sum([2, 7, 11, 15], 9)) // Output: [0, 1]
console.log(two_sum([3, 2, 4], 6)) // Output: [1, 2]
console.log(two_sum([3, 3], 6)) // Output: [0, 1]
console.log(two_sum([], 1)) // Output: []
```



