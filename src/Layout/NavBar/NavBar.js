import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles['navbar']}>
      <div className={styles['wrapper']}>
        <Link to="/" className={styles['app-name']}>
          My todo list
        </Link>
        <Link to="/create" className={styles['links']}>
          New task
        </Link>
      </div>
    </div>
  )
}

export default NavBar
