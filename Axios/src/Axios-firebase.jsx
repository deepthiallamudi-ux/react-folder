import axios from './Axios';
function Firebase() {
  // const newStudent={
  //     name:"Sarath",
  //     age:21,
  //     city:"Chennai"
  // };
  //   axios.post('/student.json',newStudent)
  //   .then((response)=>console.log("Data stored successfully:",response.data))
  //   .catch((error)=>console.error("Error storing data:",error));

 axios.put("/student/-OhQIPVW8-GdaAIdY4QV",{
    name:"Anikkk",
    course:"Reacttttt",
    age:21
  })
  .then((response)=>console.log("Data updated successfully:",response.data))
  .catch((error)=>console.error("Error updating data:",error));

  return (
    <div>
      <h1>Firebase Data Operations</h1>
    </div>
  );

}

export default Firebase;