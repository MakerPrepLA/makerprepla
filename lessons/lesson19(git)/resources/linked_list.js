/*The objective of this exercise is to implement a linked list in JavaScript. Linked lists are a fundamental computer science
data structure, and every software engineer should know how they work. Before writing any code, search the internet for resources on
linked lists, and try to figure out how they work. Once you understand how a linked list works, come back to this document and attempt
to implement it. */

/*A linked list is made up of linked nodes. The linkedListNode data structure is given to you for free and you
can use it in your linked list implementation. Take a moment to study the code below and understand what its doing,
as well as how you can use the given functionality. */
function linkedListNode(next_, value_) {

    var self = {},
        next = next_,
        value = value_;

    self.setNext = function(n) {
        next = n;
    };
    
    self.setValue = function(v) {
        value = v;
    };

    self.getNext = function() {
        return next;
    };
    
    self.getValue = function() {
        return value;
    };

    return self;
}


/*This is a skeleton for the linkedList. Your job is to implement all the methods that will make it usable. Make sure you understand
how linked list work before you start writing any code. A few things to keep in mind: a linked list is basically a bunch of nodes
where each node stores a value and a pointer to the next node in the list. The linked list data structure provides methods that
allow the user to manipulate this data structure. When you write your methods, each method call should bring the linkedlist from
one valid state to another. In each valid state, each node should contain one value, and a pointer to the next node in the list
(or point to null if its the last node in the list). In addition, the head pointer of the linked list should always point to the
first node in the list. Finally, the nodecount property should always contain an integer that represents the number of nodes
current in the linked list. */

/*How will you know if your code works? You'll need to write your own tests! Two tests are given at the end to give you an idea
how to write your tests.*/

// Its recommended to implement the methods in the order that they're defined
function linkedList() {
    
    var self = {};

    self.head = null;

    self.nodesCount = 0;
  
    // Return how many nodes/values are in the linkedList
    self.count = function() {

    };

    // Add a new item to the front of the linkedlist    
    self.addFirst = function(val) {

    };

    // Add a new item to the end of the linkedlist
    self.addLast = function(val) {

    };
    
    // Remove (and return) the first node
    self.removeFirst = function() {

    };

    // Remove (and return) the last node
    self.removeLast = function() {

    };
    
    // Search through the linkedlist and return the node whose values match the input
    // return null if node doesn't exist
    self.find = function(val) {

    };

    // Remove (and return) a node that matches a given value
    self.remove = function(val) {
        
    };

    // Search through the linkedlist and return the node that is directly before
    // the node that contains a value that matches the input. Return null if not found/
    self.findBefore = function(val) {

    };

    // Search through the linked list and return the node that is directly after
    // the node that contains a value that matches the input. Return null if not found.
    self.findAfter = function(val) {

    }

    // Insert a new item after a node that matches a specific value
    self.addAfter = function(val, newVal) {
  
    };

    // Insert a new item before a node that matches a specific value
    self.addBefore = function(val, newVal) {

    };

    // Clear/Reset the linkedList (this can be done in two lines of code)
    self.clear = function() {
    };

    return self;
}

var test1 = function() {
    var ll = linkedList();
    var firstCondition = linkedList.count() === 0;
    var secondCondition = linkedList.head === null;

    // Only returns true if all conditions are true
    return firstCondition && secondCondition;
}

var test2 = function() {
    var ll = linkedList();
    ll.addFirst('first value!');

    var firstCondition = linkedList.head.getValue() === 'first value!';
    var secondCondition = linkedList.head.getNext() === null;
    var thirdCondition = linkedList.count() === 1;

    return firstCondition && secondCondition && thirdCondition;
}

console.log(test1());
console.log(teset2());