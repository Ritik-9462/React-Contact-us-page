
import styles from "./Navigation.module.css";

const Navigation = () => {
  
  return (
    
    <nav className= {`${styles.navigation} container`}>
        <div>
            <img src="/images/logo.png" alt="" />
        </div>
        <div>
            <ul >
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation
