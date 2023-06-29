import { HTMLMotionProps } from "framer-motion";

export interface ITypingTextProps extends HTMLMotionProps<'p'> {
    title: string;
    textStyles?: string;
  }