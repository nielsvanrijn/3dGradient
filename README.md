# 3dGradient
A lightweight javascript file to create a cool 3d hover effect
======
## Installation

Include the 3d Gradient script in your html head
`<script defer type="text/javascript" src='3dGradient.js'></script>`

In the element that your want the effect add these styles
```css
will-change: transform;
transform-style: preserve-3d;
transform: perspective(300px) rotateX(0deg) rotateY(0deg);
-webkit-transform: perspective(300px) rotateX(0deg) rotateY(0deg);
transition: 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99);
-webkit-transition: 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99);
```

Done!

If you want the child elements of the main element to change perspective too, use these styles
```css
transform:scale(0.8333) translateZ(50px);
-webkit-transform:scale(0.8333) translateZ(50px);
```
