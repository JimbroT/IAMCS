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

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const currentRoute = router.route;

  return (
      <header className="bg-white py-2 sticky">
          <div className="container px-4 mx-auto lg:flex lg:items-center">
              <div className="flex justify-between items-center">
                  <Link href="/">
                      <a className="p-4">
                          <Image src={Logo} alt="logo" width={70} height={25} />
                      </a>
                  </Link>

                  <button
                      className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 lg:hidden"
                      aria-label="Menu"
                      data-test-id="navbar-menu"
                      onClick={
                          () => {
                              setShowDropdown(!showDropdown);
                          }}
                  >
                      <GoThreeBars />
                  </button>
              </div>

              <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
                  {
                      links.map(({ name, link, id }) =>
                          <Link key={name} href={link}>
                              <a
                                  className={`${link == currentRoute ? "text-blue-400" : "text-black hover:text-blue-400"} p-2 lg:px-4 lg:mx-2 rounded duration-150 transition-colors `}
                                  data-test-id={`navbar-${id}`}
                              >
                                  {name}
                              </a>
                          </Link>
                      )
                  }
              </div>

              <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-row lg:ml-auto mt-3 lg:mt-0 items-center justify-center self-center justify-self-center gap-4`} data-test-id="navbar">
                  {socialMedias.map(({ name, icon, link }) => (
                      <a key={name} href={link}>
                          <Image src={icon} width={30} height={30} alt={name} />
                      </a>
                  ))}
              </div>
          </div>
      </header>
  )
}

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
