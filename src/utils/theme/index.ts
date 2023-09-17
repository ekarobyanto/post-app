import { createTheme, createBox, createText } from "@shopify/restyle";
import { colors } from "./colors";
import { textVariants } from "./text-variants";

const theme = createTheme({
    colors:colors,
    spacing:{
        s:8,
        m:16,
        l:24,
        xl:40,
    },
  borderRadii: {
    rounded: 4,
    "rounded-lg": 8,
    "rounded-xl": 12,
    "rounded-2xl": 16,
    "rounded-3xl": 18,
  },
  textVariants,
})

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;