'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import SmsForm from "./SmsForm";
import MailForm from "./MailForm";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./forgot-password/ForgotPassword";

const LoginModal = ({ isOpen, onClose }) => {
  const [formType, setFormType] = useState("sms");
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full pt-[300px] h-[100dvh] z-[50] flex justify-center items-center overflow-auto bg-black/80">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-[10px] relative h-auto my-5 lg:w-[35%] w-[100%] md:w-[50%] z-[100]"
          >
            {formType === "sms" && (
              <SmsForm onClose={onClose} setFormType={setFormType} />
            )}
            {formType === "mail" && <MailForm setFormType={setFormType} />}
            {formType === "signup" && (
              <SignUpForm onClose={onClose} setFormType={setFormType} />
            )}
            {formType === "forgotpass" && (
              <ForgotPassword onClose={onClose} setFormType={setFormType} />
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
