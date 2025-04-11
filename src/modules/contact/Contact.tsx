import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.form_wrapper}>
      <h2 className={styles.header}>CONTACTO</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submit_button}>
          Enviar
        </button>

        <hr className={styles.separator} />

        <a
          href="/FRANCISCO-SAYAGO-CV.pdf"
          download
          className={styles.download_button}
        >
          Descargar CV
        </a>

        <div className={styles.contact_links}>
          <a href="mailto:fransayasoft@gmail.com">
            <FaEnvelope /> <span>fransayasoft@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/francisco-saygo" target="_blank">
            <FaLinkedin /> <span>/francisco-saygo</span>
          </a>
          <a href="https://github.com/Fransaya" target="_blank">
            <FaGithub /> <span>/Fransaya</span>
          </a>
        </div>
      </form>
    </div>
  );
};
