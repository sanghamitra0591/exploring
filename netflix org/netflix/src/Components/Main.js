import React from "react";
import Axios from "axios";
import "./Movies.css";
import {Image, Text, Box, HStack, Button} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TrendingNowUrl= "http://api.themoviedb.org/3/trending/all/week?api_key=7406fa4cc728e291b9be19c886cf80e5&language=en-US";
const myImageUrl= "https://image.tmdb.org/t/p/original";

 function Main(){
    const [allMovies, setAllMovies]= React.useState([]);

    React.useEffect(function(){
        async function fetchData(){
            const output= await Axios.get(TrendingNowUrl);
            const result= output.data.results;
            setAllMovies(result[Math.floor(Math.random()*20)]);
        }

        fetchData();
    }, []);
    return ( 
        <Box paddingTop="60px">
            <Image h="500px" w="100%" mb="20px" position="relative" src={myImageUrl + allMovies.backdrop_path} alt="img" />
            <Text color= "white"
                  textTransform= "uppercase"
                  position= "absolute"
                  top= "150px"
                  left= "40px"
                  fontWeight= "900" 
                  fontSize='40px'
                  >{allMovies.title}</Text>
            <Text color= "white"
                position= "absolute"
                top= "270px"
                left= "40px"
                fontWeight= "600" 
                fontSize='20px'
                w="500px"
                h="160px"
                overflow="hidden"
                >{allMovies.overview}</Text>
            <HStack position="absolute" bottom="80px" left="100px" spacing="10px">
                <Button p="2px 22px" rounded="5px" border="none" fontSize="19px" bg='white' leftIcon={<PlayArrowIcon sx={{ fontSize: 40 }} />}>
                    Play
                </Button>
                <Button p="10px 22px" rounded="5px" border="none" color="white" fontSize="16px" bg='#818589' leftIcon={<InfoOutlineIcon w={24} h={24} />}>
                    More Info
                </Button>
            </HStack>
        </Box>
     )
 }
 export default Main;