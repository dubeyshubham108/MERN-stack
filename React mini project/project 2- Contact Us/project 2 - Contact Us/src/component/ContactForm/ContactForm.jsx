import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                    <Button text="VIA CALL" icon={<MdAddCall fontSize="24px"/>}/>
                </div>
                <Button
                isOutline={true} 
                text="VIA EMAIL FORM" 
                icon={<HiMail fontSize="24px"/>}/>
                <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8"/>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }} >
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/service24.png" alt="" />
            </div>
        </section>
    )
};

export default ContactForm;