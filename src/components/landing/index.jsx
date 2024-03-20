import styles from './styles.modules.scss'
import { background,image1 } from '../data'
import Image from 'next/image'

export default function Landing() {
    return(
        <div className={styles.landing}>
            <div className={styles.body}>  
                <div className={styles.img_background}>
                    <Image
                        src={background}
                        width={0}
                        height={0}
                        layout="fill"
                        objectFit="cover"
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
    )
}