

const rokket = (num, num2, num3 ) => 
( num * ( num2 * num3 ) );
//--------------------------------------------| Question 1


const rokket2 = ( list ) => 
list.reduce( ( acu, element ) => acu.length > element.length ? acu : element );
//--------------------------------------------| Question 2


const rokket3 = ( str, num ) => 
( str.repeat( num ) );
//--------------------------------------------| Question 3


const rokket4 = ( contact ) =>
{

    let lastName = [];


    contact.map( ( element ) => 
    {

        lastName.push( element.lastName ); 

    });


    return lastName;

};
//--------------------------------------------| Question 4


const rokket5 = ( arrayN1, arrayN2 ) =>
( [ ... new Set( arrayN1.concat( arrayN2 ) ) ] );

//--------------------------------------------| Question 5

///////////////////////////////////////////////////////////////////////////


console.log( 'Question 1' );
console.log( rokket( 2,5,3 ) );
console.log( rokket( 4,2,2 ) );
console.log( rokket( 8,2,1 ) );


console.log( 'Question 2' );
console.log( rokket2( ['best', 'company', 'ever'] ) );


console.log( 'Question 3' );
console.log( rokket3( 'node', 5 ) );
console.log( rokket3( 'abc', 2 ) );


console.log( 'Question 4' );
const contact = 
[

    { firstName : 'Juanito', lastName : 'Rokket' },
    { firstName : 'James', lastName : 'Bond' },
    { firstName : 'Harry', lastName : 'Potter' }

];
console.log( rokket4( contact ) );


console.log( 'Question 5' );
console.log( rokket5( [1, 2, 5], [2, 1, 6] ) );
console.log( rokket5( [1, 2, 3], [4, 5, 6] ) );


