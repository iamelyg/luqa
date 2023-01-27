import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

import { INFORMATION } from "./app/constants";

export default extendTheme({
    colors: {
        primary: {
            10: 'rgba(1, 102, 253, .1)',
            100: theme.colors[INFORMATION.color],
        },
        bgBody: '#070e27',
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('white', '#070e27')(props),
            },
        }),
    }
})