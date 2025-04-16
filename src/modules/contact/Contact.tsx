import React, { useState } from "react";
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
    <div className="flex flex-col items-center justify-center p-8">
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

      <h2 className="text-3xl font-bold mb-4 text-white text-center mt-0">
        CONTACTO
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] text-white p-8 rounded-2xl w-full max-w-xl flex flex-col gap-5"
      >
        {/* Email */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-md bg-[#dcdcdc] text-black text-base"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="font-bold mb-2">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-3 rounded-md bg-[#dcdcdc] text-black text-base"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={messageText}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 rounded-md bg-[#dcdcdc] text-black text-base border-2 border-blue-500 resize-none"
          />
        </div>

        {/* Botón Enviar */}
        {!sending ? (
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-800 transition w-[150px] self-center"
          >
            Enviar
          </button>
        ) : (
          <div className="flex justify-center w-full h-[30px]">
            <Flex align="center" gap="middle">
              <Spin indicator={<LoadingOutlined spin />} size="large" />
            </Flex>
          </div>
        )}

        <hr className="my-6 border border-gray-800" />

        {/* Descargar CV */}
        <a
          href="/FRANCISCO-SAYAGO-CV.pdf"
          download
          className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-800 transition text-center w-fit mx-auto relative z-10"
        >
          <span className="text-white font-semibold">Descargar CV</span>
        </a>

        {/* Redes */}
        <div className="mt-6 flex justify-around flex-wrap gap-4 text-sm text-white text-center">
          <a
            href="mailto:fransayasoft@gmail.com"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaEnvelope />
            <span>fransayasoft@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/francisco-saygo"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaLinkedin />
            <span>/francisco-saygo</span>
          </a>
          <a
            href="https://github.com/Fransaya"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaGithub />
            <span>/Fransaya</span>
          </a>
        </div>
      </form>
    </div>
  );
};
