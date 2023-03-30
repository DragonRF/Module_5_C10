import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About Us</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <p>Logout</p>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
    );
}