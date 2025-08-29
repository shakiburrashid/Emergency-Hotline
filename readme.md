

### 1. Question Answer: 

1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById = It select Id,and based on unique. It return single element object object 
getElementsByClassName = It selecte specific class and not unique. And return HTMLCollection, it's like array type
querySelector = It select id,class tag like css selector, based on match first element. And return single element object. 
querySelectorAll = It is like querySelector but  it's all elements can select.And returns a NodeList.

---

2) How do you create and insert a new element into the DOM?
Answer: First use (if yoy create div tag) 
 document.createElement("div");
div.innerHtml = ``

---

3) What is Event Bubbling and how does it work?

Answer: In Event Bubbling is like a Upside down tree, thats have propagation thats event triggered on a specific element first triggers its own handler, and then travels up through its parent elements and ancestors to the root of the DOM. 
It's working by Event Trigger, Target Phase,  Bubbling Phase,Ancestor Listeners

---

4) What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

Event delegation is useful mainly for three reasons: 
1| Better Performance (Efficiency)
2| Works with Dynamic Content
3| Cleaner & Easier to Maintain Code

---

5) What is the difference between preventDefault() and stopPropagation() methods?

*** preventDefault()** is the default action of an element from happening. And it does not stop the event from bubbling (propagation continues).

**stopPropagation()** is stops the event from bubbling up (or trickling down, if using capture phase).
The default action still happens unless call preventDefault().

