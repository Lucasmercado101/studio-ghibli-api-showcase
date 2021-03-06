import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const fadeText: React.FC<{ className?: any }> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="hide"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4 }
  },
  hide: { height: 0, opacity: 0, transition: { duration: 0.4 } }
};

const DropdownContent = styled(fadeText)`
  color: ${({ theme }) => theme.primary};
  line-height: 1.5;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export default DropdownContent;
