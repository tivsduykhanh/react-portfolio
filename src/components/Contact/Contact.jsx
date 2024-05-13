import React from 'react'
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} />
                <a href='mailto:ddkhanh280200@gmail.com'>ddkhanh280200@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} />
                <a href='mailto:ddkhanh280200@gmail.com'>ddkhanh280200@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} />
                <a href='https://github.com/tivsduykhanh'>github.com/tivsduykhanh</a>
            </li>
        </ul>
    </footer>
  )
}
