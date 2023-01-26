import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { Button, Grid, Link, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { Product } from "@/product/types";

interface Props {
  products: Product[]
}


const IndexRoute: React.FC<Props> = ({ products }) => {

  return <div>hola</div>
}


export default IndexRoute;