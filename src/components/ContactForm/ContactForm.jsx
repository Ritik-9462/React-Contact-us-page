import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import {MdOutlineMessage} from "react-icons/md"
import {FiPhone} from "react-icons/fi"

const ContactForm = () => {
  return (
    
    <section className={styles.container}>
        <div className={styles.contact_form}>
           <div className={styles.top_btn}> 
              <Button  text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
              <Button  text="VIA CALL" icon={<FiPhone fontSize="24px"/>}/>
           </div>
           <div className={styles.middle_btn}> 
           <Button 
           isOutline = {true}
           text ="VIA EMAIL FORM"
           icon ={< MdOutlineMessage fontSize="24px"/>}/>
           </div>

           <form>
             <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text"  name= "name"/>
             </div>

             <div className={styles.form_control}>
              <label htmlFor="email">E-Mail</label>
              <input type="text"  name= "email"/>
             </div>

             <div className={styles.form_control}>
              <label htmlFor="text">TEXT</label>
              <input type="text" name= "text"/>
             </div>

           </form>


           <div className={styles.bottom_btn}> 
              <Button  text="SUBMIT" />
             
           </div>

        </div>
        <div className={styles.contact_img}>
            <img src="/images/contact_img.svg" alt="#" />
        </div>
    </section>
  )
}

export default ContactForm
