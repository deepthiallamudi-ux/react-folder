function List(){ 
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// fruits.sort()
// const listItem=fruits.map((fruit,index)=><li>{fruit}</li>);

// return (<ul>{listItem}</ul>);


// const age=16;
// const age1=0;

// return(
  
//     // fragment syntax. it means a empty tag
//     <>
//   <div>
//     <p>{age1||"age not entered"}</p>        
//     {/* conditional rendering using logical OR operator */}
//     {
//     age>=18 ? <h2>You are eligible to vote</h2> : <h2>You are not eligible to vote</h2>  
//     }
//   </div>
//   </>
// );

// let age=undefined;
// let finalAge=null;
// return(
//   <>
//   <div>
//     <p>{age ?? "Age not entered"}</p>
//     {/* conditional rendering using nullish coalescing operator */}
//   </div>
//   {console.log(age)}
//   </>
// );

let age=0;
console.log(age||70);
console.log(age??70);
}
export default List;