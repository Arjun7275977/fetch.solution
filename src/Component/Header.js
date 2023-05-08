import {React,useRef} from 'react';
import styles from './Header.module.css';
import {FaTimes} from 'react-icons/fa'
export default function Header(){
    const Navref=useRef();
    const ShowNavBar =()=>{
        Navref.current.classList.toggle("responsive_nav")
    }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav ref = {Navref} >
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <button className="ToggleBtn" onClick={ShowNavBar}>
                    <FaTimes/>
                </button>
      </nav>
      <button className={styles.menuButton}>Menu</button>
      
    </header>
  );
}