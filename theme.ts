import { extendTheme, theme } from "@chakra-ui/react";

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
        global: {
            body: {
                backgroundColor: 'bgBody',
                color: 'white'
            }
        }
    }
})