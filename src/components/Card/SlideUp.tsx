import React from "react";
import { motion } from "framer-motion";

type Props = {
  component?: React.ReactNode;
  className?: string;
  style?: object;
};

const variants = {
  hidden: { y: "50%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const SlideUp: React.FC<Props> = ({
  children,
  component,
  className,
  style
}) => {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* This parent div only exists for hiding the item moving up,
       making it look like it appears out of nowhere, not
       for classes or styles */}
      <motion.div variants={variants} className={className} style={style}>
        {component || children}
      </motion.div>
    </div>
  );
};

export default SlideUp;
