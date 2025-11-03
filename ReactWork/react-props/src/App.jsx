
import './App.css'
import Student from './components/student.jsx'
import Container from './components/container.jsx'

function App() {
  const student=[
    {
      image:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      name:"Jatin Chaurasiya",
      roll:"23",
      branch:"Computer Science",
      section:"A",
      course:"Full Stack Development"
    },
    {
      image:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png",
      name:"Jane Smith",
      roll:"45",
      branch:"Information Technology",
      section:"B",
      course:"Frontend Development"
    },
  ]


  return (
    <Container>
     {/* <Student data={student}/> */}
     {student.map((item,index)=>( 
      <Student key={index} data={item}/>
     ))}
    </Container>
  )
}

export default App
