/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    1 2 , 2 action() step 2m async because of delay and function callback :/
 *    
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    same way I though just unsure why closure I think excutes the closure last. excutes the console.logs the function then it has to open the closure function too
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
// 1. Its going to go step 1, step 3 then the function call with the closure inside or callback displaying step 1, and async
// 2 It printed the way I thought it would 
// 3. After further inspection it has nothing to do with the closure but it has to do with the set timeout. That causes it to be delayed after step 3. Or its the function call with in the function call with in the function call :/
function snooze(action) {
  action()
    setTimeout(function() {
      action();
    }, 0);
}

console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

