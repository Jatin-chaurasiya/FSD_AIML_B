import styles from './Conatiner.module.css'

function Container({children}) {
  return (
    <div className={styles.container}>
      <h2>Student Information</h2>
      {children}
    </div>
  )
}
export default Container;