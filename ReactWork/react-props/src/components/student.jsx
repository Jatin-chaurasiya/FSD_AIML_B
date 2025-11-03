function Student({data}){
    return(
        <div>
            <h1>Student Info</h1>
            <img src={data.image} alt="student pic" width="200px" height={200} />
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.roll}</h2>
            <h2>Branch:{data.branch}</h2>
            <h2>Section:{data.section}</h2>
            <h2>Course: {data.course}</h2>
        </div>
    )
}
export default Student;