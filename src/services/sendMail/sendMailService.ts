import axiosInstance from "../axiosConfig";

export const sendMail = async (
  email: string,
  subject: string,
  message: string
) => {
  const body = {
    email,
    subject,
    message,
  };

  const response = await axiosInstance.post("sendMailMe", { body });
  return response;
};
