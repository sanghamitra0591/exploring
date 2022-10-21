import { BellIcon, SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Movies.css";


function Navbar(){
  return <Box position="fixed" zIndex="1" bg="#141414" mt="-10px" w="100%" p="5px 0px">
    <Box w="94%" h="60px" m="auto" display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box>
          <Image m="0px" mr="30px" h="65px" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14.5px" fontWeight="500">
          <NavLink to="/" 
                  style={{
                    color: "#E5E5E5",
                    textDecoration:"none",
                    marginRight: "15px"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                  Home
          </NavLink>
          <NavLink to="/"
                  style={{
                    color: "#E5E5E5",
                    textDecoration:"none",
                    marginRight: "15px"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                    TV Shows
          </NavLink>
          <NavLink to="/"
                  style={{
                    color: "#E5E5E5",
                    marginRight: "15px",
                    textDecoration:"none"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                    Movies
          </NavLink>
          <NavLink to="/"
                  style={{
                    color: "#E5E5E5",
                    textDecoration:"none",
                    marginRight: "15px"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                    New & popular
          </NavLink>
          <NavLink to="/"
                  style={{
                    color: "#E5E5E5",
                    textDecoration:"none",
                    marginRight: "15px"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                    My List
          </NavLink>
          <NavLink to="/"
                  style={{
                    color: "#E5E5E5",
                    textDecoration:"none",
                    marginRight: "15px"
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginRight: "15px"
                  }}>
                    Browse by Language
          </NavLink>
        </Box>
      </Box>
      <Box display="flex" gap="15px" alignItems="center">
        <SearchIcon w={20} h={20} />
        <NavLink to="/"
                  style={{
                    color: "white",
                    textDecoration:"none",
                  }}
                  activeStyle={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline"
                  }}>
                    children
          </NavLink>
        <BellIcon w={25} h={25} />
        <Image m="0px" rounded="5px" boxSize='30px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs6Nmxfy7zKOQJhztIsVT3VHNcnQL9kIJkg&usqp=CAU' alt='Dan Abramov' />
        <TriangleDownIcon w={12} h={12} />
    </Box>
    </Box>
  </Box>
}

export default Navbar;