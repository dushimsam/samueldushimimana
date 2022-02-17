import styles from '../styles/Login.module.scss'
import React, {useEffect} from "react"
import { useRouter } from 'next/router';


export function Form() {

    const [form, setForm] = React.useState({
        amount: "",
        meter: "",
    });

    const handleFormChange = (property) => (event) => {
        setForm({...form, [property]: event.target.value});
    };

    const router = useRouter();

    
    const request = () => {

    }

    return (
        <div>
            <section className={`${styles.sectionOne} container-fluid`}>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className={styles.formContainer}>
        
                            <button className={styles.button} onClick={() => router.push('/request')}>
                                REQUEST NEW METERS
                            </button>

                            <button className={styles.button} onClick={() => router.push('/buy')}>
                                BUY  ELECTRICITY
                            </button>
                        
                            <button className={styles.button} onClick={() => router.push('/account-status')}>
                                VIEW ACCOUNT STATUS
                            </button>
            
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Form