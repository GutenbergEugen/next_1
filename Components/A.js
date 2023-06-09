import Link from "next/link";
import styles from '../styles/A.module.css';

export default function({text, href}){
    return(
        <Link legacyBehavior href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}