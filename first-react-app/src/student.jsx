// read only properties
//shared components
//parent to child data flow
function Student(props) {
    return (
        <div className="student">
            <h1>Student Component</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student:{props.isStudent?"Yes":"No"}</p>
        </div>
    );
}

export default Student;