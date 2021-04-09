## Problem : Merge Intervals

### Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

```
{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
```

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

```
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
```
Your function would return:

```
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
```

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

## Solution

First, we sort our input array of meetings by start time so any meetings that might need to be merged are now next to each other.

Then we walk through our sorted meetings from left to right. At each step, either:

- We can merge the current meeting with the previous one, so we do.
- We can't merge the current meeting with the previous one, so we know the previous meeting can't be merged with any future meetings and we throw the current meeting into mergedMeetings.

```
function mergeMeetings(meetings) {

  // deep clone of the input
  let meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // sort the meetings in ascending order of their startTime
  let sortedMeetings  = meetingsCopy.sort((item1, item2) => item1.startTime - item2.startTime);

  let mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++){
    let currentMeeting = sortedMeetings[i];
    let previousMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= previousMeeting.endTime){
      previousMeeting.endTime = Math.max(currentMeeting.endTime, previousMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

const inputMeetings = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

mergeMeetings(inputMeetings)
```

## Complexity

### O(nlogn) time and O(n) space.

Even though we only walk through our array of meetings once to merge them, we sort all the meetings first, giving us a runtime of O(nlgn). It's worth noting that if our input were sorted, we could skip the sort and do this in O(n) time!

We create a new array of merged meeting times. In the worst case, none of the meetings overlap, giving us an array identical to the input array. Thus we have a worst-case space cost of O(n).
