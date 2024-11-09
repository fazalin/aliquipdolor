function offset(view) {
    // Assume view has properties x, y representing its position
    return createVector(view.x, view.y);
}

// Assuming 'view' is an object with x and y properties
let view = { x: 100, y: 150 };
let translate = offset(view);

console.log('Offset Vector:', translate);
