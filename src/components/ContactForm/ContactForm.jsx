
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

const [name,setName] = useState("kt");
const [email,setEmail] = useState("kt@gmail.com");
const [text,setText] = useState("i am krishna");

// const onViaCallSubmit = () => {
//   console.log("I am from call");
// }
// let name ="kt";
// let email = "kt@gmail.com";
// let text = "i am krishna";

const onSubmit = (event) => {
  event.preventDefault(); // page not refresh
 setName(event.target[0].value);
 setEmail(event.target[1].value);
 setText(event.target[2].value);
  // name = event.target[0].value;
  // email = event.target[1].value;
  // text = event.target[2].value;


  console.log({name, email, text});
//  console.log("name",event.target[0].value);
//  console.log("email",event.target[1].value);
//  console.log("text",event.target[2].value);
}
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
          {/* <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhone fontSize="24px"/>}/> */}
          <Button  text="VIA CALL" icon={<FaPhone fontSize="24px"/>}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
          <form action="" onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
          <textarea name="text" rows="8"></textarea>
            </div>
            <div style={{display:"flex",
            justifyContent:"end",

            }}>
            <Button  text="SUBMIT BUTTON"/>
            </div>
          
           <div>{name + " " + email + " " + text}</div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="./contact.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm