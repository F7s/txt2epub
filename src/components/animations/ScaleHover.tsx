import { HTMLMotionProps, motion } from 'framer-motion';

interface ScaleHoverProps extends HTMLMotionProps<"div"> {
  scale?: number;
  rotate?: number;
}

export const ScaleHover = ({ 
  children, 
  scale = 1.05, 
  rotate = 0,
  className,
  ...props 
}: ScaleHoverProps) => {
  return (
    <motion.div
      whileHover={{ scale, rotate }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
