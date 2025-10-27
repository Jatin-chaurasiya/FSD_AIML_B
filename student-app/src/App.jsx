function App() {
  const student = {
    id: "1",
    name: "Jatin Chaurasiya",
    branch: "Computer Science",
    college: "ABES Institute of Technology"
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Details</h1>
      <div style={styles.card}>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>College:</strong> {student.college}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  title: {
    color: "#007bff",
    marginBottom: "20px"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "left"
  }
};

export default App;
