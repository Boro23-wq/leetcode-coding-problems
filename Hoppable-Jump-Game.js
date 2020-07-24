Leetcode Problem #55: Jump Game

Problem statement:

Given an integer list nums where each number represents the maximum number of hops you can make, 
determine whether you can reach to the last index starting at index 0.



var canJump = function(nums){ 
  //index of the last item in the array
  let lastPosition = nums.length - 1
  
  //loop from end to start of the array
  for (let i = lastPosition; i >= 0; i--){
    //check if the current index is reachable from the previous index
    // it will only be reachable if it is atleast equal or greater than the current index
    if(i + nums[i] >= lastPosition) {
      lastPosition = i
     }
    }
    //check if we have reached the start of the array
    return lastPosition === 0
}

// canJump([2,3,0,1,0,1])

