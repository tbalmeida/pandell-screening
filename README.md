# Pandell screening code

> Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 **(inclusive)**.

The most important success factor is to produce the best solution you can to solve the problem. There are many aspects to consider within that context – *efficiency, performance, documentation, etc*. Code to perform the algorithm is the minimum requirement. 
Your deliverable should contain enough to give us a glimpse into your analysis, your approach, your skills, or anything else that will demonstrate your ability as a software developer. 
We will be looking for a good approach, a glimpse into your thought process, things you can do to impress us, and clean and efficient code. We’re your potential customer for this assignment, show us what you’ve got.

Your deliverable will be something that we can compile and run (to test the results), written in *C#* or *JavaScript* (*web* or *node.js*) along with whatever explanation of the code/program that you feel is necessary. 
(Note: A standalone .exe file is not required nor recommended to be included alongside your solution.) 
Please have your submission to me within one week from today.

We will be choosing candidates to interview based upon the successful completion and evaluation of the submitted solutions to this problem.

## Proposed solution
Given a start and an end numbers, being the latter the highest of the two, an array is created and. Randomly, items are copied from this array to a new one. Evey time an item is copied, the number is deleted from the origin and the array is resized.
This approach guarantees no duplicates and it is faster after every execution, since the origin of the data is smaller over time.

**Execution** 
node number_generator [min] [max]

**Online REPL**

[Replit](https://replit.com/@tbalmeida/InfantilePassionateTelecommunications#index.js)
