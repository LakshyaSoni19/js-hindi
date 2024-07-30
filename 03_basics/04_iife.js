// Immediately Invoked Function Expressions(IIFE)

// named iife
(function chai() {
    console.log(`DB CONNECTED`);
})
();

(function aurcode() {
    console.log(`DB CONNECTED Two`);
})
();

// unnamed iife
((name) => {
    console.log(`DB CONNECTED Three ${name}`);
})
('lakshya')