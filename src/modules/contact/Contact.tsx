import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { Modal } from "antd";

import { sendMail } from "../../services/sendMail/sendMailService";

import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

import { message } from "antd"; // ✅ ESTA ES LA QUE FALTA

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageText, setMessage] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const [sending, setSending] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    if (email && subject && messageText) {
      try {
        const response = await sendMail(email, subject, messageText);

        setSending(false);

        if (response.request.status == 200) {
          setEmail("");
          setSubject("");
          setMessage("");

          showModal();
        }

        console.log("response", response);
      } catch (error) {
        console.error("Error al enviar email", error);
      }
    } else {
      errorSubmit();
    }
  };

  const errorSubmit = () => {
    messageApi.open({
      type: "error",
      content:
        "Faltan completar algunos campos. Revisá el formulario e intentá de nuevo.",
    });
  };

  return (
    <div className={styles.form_wrapper}>
      {contextHolder}
      <Modal
        title="Mensaje enviado"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Entendido"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>¡Gracias por tu mensaje!</p>
        <p>Tu email fue enviado correctamente y ya lo recibí.</p>
        <p>En breve me pondré en contacto con vos 🙂</p>
      </Modal>

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
            value={messageText}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {!sending && (
          <button type="submit" className={styles.submit_button}>
            Enviar
          </button>
        )}
        {sending && (
          <div className={styles.container_spinner}>
            <Flex align="center" gap="middle">
              <Spin indicator={<LoadingOutlined spin />} size="large" />
            </Flex>
          </div>
        )}

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
