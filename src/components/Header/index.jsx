import styles from './styles.module.scss'

export default function Header() {
    return(
        <div className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.col}>
                    <h1>Index Studio</h1>
                </div>
                <div className={styles.col}>
                    <div>
                        <a>Home,</a>
                    </div>
                    <div>
                        <a>Products,</a>
                    </div>
                    <div>
                        <a>Info,</a>
                    </div>
                    <div>
                        <a>Contact</a>
                    </div>
                </div>
                <div className={styles.col}>
                    <div>
                        <a>Search</a>
                    </div>
                    <div>
                        <a>Account</a>
                    </div>
                    <div>
                        <a>Cart</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}