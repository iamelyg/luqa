import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

import { INFORMATION } from "./src/app/constants";

export default extendTheme({
  colors: {
    primary: {
      10: "rgba(1, 102, 253, .1)",
      100: theme.colors[INFORMATION.color],
    },
    bgBody: "#070e27",
    gray: {
      700: "#0C1946",
      800: "#070e27",
    },
    brand: {
      50: "#e6eefe",
      100: "#b3cdfd",
      200: "#99bdfc",
      300: "#4d8bf9",
      400: "#1a6af8",
      500: "#0059f7",
      600: "#0047c6",
      700: "#003594",
      800: "#002463",
      900: "#001231",
    },
  },
  components: {
    Button: {
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        variant: 'solid', // default is solid
        colorScheme: 'brand', // default is gray
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("#EBF2FF", "gray.800")(props),
      },
    }),
  },
});
