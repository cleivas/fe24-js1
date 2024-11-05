let x = 1;
let y = '1';

console.log( x==y )
console.log( x===y )

console.log( x!=y)
console.log( x!==y )

// Jämförs två strings med varandra med < eller > går man efter ordningen i alfabetet. Eftersom bokstaven d kommer efter c räknas variabeln y som större
x = 'abc';
y = 'abd';
console.log('------------')
console.log( x > y);
console.log( x < y);

x = 10;
y = 10;
console.log('------------')
console.log(x<y)
console.log(x<=y)

// Logical operators

console.log('------------')
console.log( x<y && x==y);
console.log( x<y || x==y);
console.log( !(x<y || x==y) );