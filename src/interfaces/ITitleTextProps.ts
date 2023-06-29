import { HTMLMotionProps } from "framer-motion";

export interface TitleTextProps extends HTMLMotionProps<'h2'> {
    title: string;
    textStyles?: string;
  }
