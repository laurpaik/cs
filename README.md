[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: An introduction

[Computer science](https://en.wikipedia.org/wiki/Computer_science) as an area of
study comprises everything necessary for the design, construction, and use of
computers.

We'll focus on one area of theoretical computer science, algorithms and data
structures, and begin with abstract data types.

## Prerequisites

-   Familiarity with a high-level programming language implementing dynamic
    arrays.

## Objectives

By the end of this, developers should be able to:

-   Define abstract data type (ADT).
-   Create stacks and queues from dynamic arrays.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

## Abstract data type (ADT)

An [ADT](https://en.wikipedia.org/wiki/Abstract_data_type) is a type defined by
what it does, rather than how it is implemented.  Specific implementations have
limitations not found in the ADT and must be able to create instances of the
type.
-  They're *purely* theoretical LOL

## Stack

A stack implements a last in, first out data store (LIFO).
-  Last in, first out... literally it's what it sounds like
-  Plate example-- the last plate on the stack is the first one taken out usually

### Discussion: Stack

Stack operations:

-   `empty?` - check to see if there are any items on a stack.
    - Is there a stack? Lol
-   `push` - add an item onto the top of a stack.
-   `pop` - remove and return an item from the top of a stack.
    - If the stack is empty and you try to pop, it gets weird lol you'll
      probably get a `nothing` type like `null` or `nil`
-   Any stack that is implemented has these methods!
-   A stack strace just shows you what's on the stack
-   If you're using a function that calls itself (recursive function), any time
    you call it, the information gets saved in a stack
    And then it gets called until you run out of space
    - example:
    ```node
    const recurse = function recurse() { recurse();};
    /*if called, returns RangeError: Maximum call stack size exceeded*/
    ```
    - This is a call stack! lol
    - But infinite looping doesn't create a new call stack...
      - it's the repeated calls, specifically
      - you can call something once and have it loop lol

Visualizing stack implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/StackArray.html).
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/StackLL.html).
    - A linked list's theoretical limit is the memory on your computer
    - Will arrays always be fixed?
        - On your machine, the memory is just an array
        - JavaScript and Ruby manage that for you so you don't have to worry
          about making the array bigger

### Demonstration: Implementing a stack in JavaScript

- check out [defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- also look at notes in [./lib/stack.js](https://github.com/laurpaik/cs/blob/training/lib/stack.js)
- on the object created by new, Antony created an object, `_store`, which is an array that's hidden
```node
> stack._store = [0,1,2]
[ 0, 1, 2 ]
> stack._store
[]
/*We didn't actually reassign _store because it's JUST a getter*/
```
- He also created a method `isEmpty`, that returns true if the stack is empty
- More methods --push and pop
- `_store` is just data, whereas `isEmpty` has some functionality
  - `isEmpty` actually runs code
  - it's just a getter, but it's still running code
  - Kind of like 0Squad cart!
  - You can't hide things completely in these interpreted languages... there's always some sort of loophole
  - `defineProperty` is kind of like devs saying 'plz do not mess with this'

### Code along: Annotating a stack implementation in JavaScript

### Lab: Implementing a stack in Ruby

- look at [./lib/stack.rb](https://github.com/laurpaik/cs/blob/training/lib/stack.rb)

## Queue

A queue implements a first in, first out data store (FIFO).

### Discussion: Queue

Queue operations:

-   `empty?` - check to see if there are any items in a queue.
-   `enqueue` - add an item to the tail of a queue.
    - even if you dequeue
    - it'll wrap around once it gets to the end, I think
    - it'll finish the end of the array and then if there are empty slots it'll default to those empty slots
    - Once it's full, head and tail will prevent you from adding more
-   `dequeue` - remove an item from the head of a queue.
    - Takes something off the first end!!! First in, first out
    - Yooo if you dequeue, the index number of the new head does not change back to 0

Visualizing queue implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/QueueArray.html)
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/QueueLL.html)

### Demonstration: Implementing a queue in Ruby

- Don't name your class Queue omg Ruby already has one called Queue
- If we use the same name, Ruby will get confused LOL

### Code along: Annotating a queue implementation in Ruby

- look at [./lib/queue.rb](https://github.com/laurpaik/cs/blob/training/lib/queue.rb)

### Lab: Implementing a queue in JavaScript

## Implementation details

Do we need `empty?` (or `isEmpty` or `isempty`) when implementing either ADT in
a language that has a "nothing" type  (`nil` in Ruby, `undefined` in JavaScript,
or `None` in Python)?  Why or why not?

How should we handle the limitations of concrete implementations of either ADT?

## List

### Discussion: List

List operations:

-   `empty?` - check to see if there are any items in a list.
-   `first` - return the item at the head of a list.
-   `rest` - return the tail of a list - the list comprised of all elements
    except the head (the element containing the item returned by first).
-   `prepend` - create a one element list and add the existing head as its tail.
-   `delete` - replace a list with `rest`, removing the head.

### Lab: List

In your squads, discuss implementing these operations using an array.

What if this theoretical array type only provided index based access to elements
(i.e. the `[]` operator) and required explicit allocation of space for elements?
Would this change your implementation significantly?  How would you handle
adding an item to a "full" array?

## Additional Resources

-   [Data Structure Visualizations](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html).

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
