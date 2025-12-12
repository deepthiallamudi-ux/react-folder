//1.global or external styling
//2.inline/internal styling
//3.module/ modular styling
import React from "react";

// import "./try.css";  // global styling. 

// it is done using external css files which are imported in the component file.it is applied to the entire app. used when u want to apply same styles across multiple components. disadvantage is that it can leak styles to other components unintentionally.it means if u have 2 components with same class name they will have same styles which may not be desired.

import styles from "./styling.module.css"; // module styling
//module styling is used to avoid style leakage. in module styling each component has its own css file which is imported in the component file. the styles defined in the module css file are scoped to that component only and do not affect other components. it is written as filename.module.css. name need not be same as component  name. disadvantage is that it requires more setup and may increase the bundle size.

function Styling() {
    //  return (<button className="btn">click me for styling</button>    // using global styling.   class is a key word in react so we use className
    //  );
     return (<button className={styles.btn}>click me for styling</button>  // using module styling
        );
    }
    export default Styling;
    

    // inline styling is used to apply styles directly to the element using the style attribute. it is used when u want to apply dynamic styles based on component state or props. disadvantage is that it can make the code less readable and harder to maintain.