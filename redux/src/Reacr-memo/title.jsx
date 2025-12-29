
import React from 'react';


function Title() {
  console.log("Title component rendered");
  return <h1>use callback hook Example</h1>;
}
export default React.memo(Title)
