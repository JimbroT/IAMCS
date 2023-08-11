import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GoThreeBars } from "react-icons/go"

import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";
import { motion } from "framer-motion";

const links = [
  {
      name: "Home",
      link: "/", 
      id: "home",
      priority: false
  },
  {
      name: "Our Partners",
      link: "/partners",
      id: "partners",
      priority: false
  },
  {
      name: "Workshops",
      link: "/workshops",
      id: "workshops",
      priority: false
  },
  {
      name: "About",
      link: "/about",
      id: "about",
      priority: false
  },
  {
      name: "Blog",
      link: "/blog",
      id: "blog",
      priority: false
  },
  {
      name: "Our Team",
      link: "/team",
      id: "team",
      priority: false
  },
  {
      name: "FAQ",
      link: "/faq",
      id: "faq",
      priority: false
  },
];

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center as="button" p="2" fontSize="2xl" onClick={onToggle} color="white">
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="#3B005A"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0" divider={<StackDivider borderColor="white" />}>
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop
          key={index}
          href={link.href}
          fontSize="xl"
          fontWeight="bold"
          _hover={{ color: "gray.500" }}
        >
          {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
