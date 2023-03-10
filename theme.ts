import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export default extendTheme({
  colors: {
    bg: {
      dark: {
        500: '#070e27',
        600: '#060C23',
      },
      light: {
        500: '#EBF2FF', 
        600: '#D6E4FF',
      }
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
      'body, header.main': {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("bg.light.500", "bg.dark.500")(props),
      },
      'footer.main': {
        bg: mode("bg.light.600", "bg.dark.600")(props),
      }
    }),
  },
});
