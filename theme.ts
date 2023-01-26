import { extendTheme, theme } from "@chakra-ui/react";

import { INFORMATION } from "./app/constants";

export default extendTheme({
    colors: {
        primary: theme.colors[INFORMATION.color],
        primary: {
            10: 'rgba(1, 102, 253, .1)',
        }
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'primary.10'
            }
        }
    }
})