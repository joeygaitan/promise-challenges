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
 *    I was correct it would still call after because of closure. I think it has something to do with the call stack.
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
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

