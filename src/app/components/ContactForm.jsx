'use client'

import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css"
import {Mulish} from "next/font/google";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const initstate = {
    username:"",
    email:"",
    phone:"",
    message:""
}

const ContactForm = () => {
    const[user, setUser] = useState(initstate);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name] : value});
    }
    console.log(user, 'user'); 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
                <div className={styles.input_field}>
                    <label htmlFor="username" className={styles.label}>
                        Enter your name
                        <input type="text" name="username" id="username"
                            placeholder="Enter your name"
                            className={mulish.className}
                            value={user.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor="email" className={styles.label}>
                        Email
                        <input type="text" name="email" id="email"
                            placeholder="Enter your email"
                            className={mulish.className}
                            value={user.email}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor="phone" className={styles.label}>
                        Phone Number
                        <input type="number" name="phone" id="phone"
                            placeholder="Enter your phone"
                            className={mulish.className}
                            value={user.phone}
                            onChange={handleChange}
                            required
                                autoComplete="off"
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor="message" className={styles.label}>
                        Message
                        <textarea  name="message" id="message" rows={5}
                            placeholder="Enter your Message"
                            className={mulish.className}
                                value={user.message}
                                onChange={handleChange}
                                required
                                    autoComplete="off"
                        />
                    </label>
                </div>

                <div>
                    {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                    {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                    <button type="submit" className={mulish.className}>Send Message</button>
                </div>
            </form>
    )
}

export default ContactForm