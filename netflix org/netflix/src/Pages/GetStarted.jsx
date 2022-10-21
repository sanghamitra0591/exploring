import { Box, Button, Image, Select, Text } from "@chakra-ui/react";
import "../Components/Movies.css";

function GetStarted(){
    return <Box bg="#141414">
        <Box>
            <Box position="relative">
                <Image filter='auto' brightness='30%' mt="-10px" w="100%" h="750px" src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/c6e22290-98e5-4eee-b72d-47156e4893fc/IN-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="largeimg" />
            </Box>
        </Box>
        <Box bg="none" w="100%" color="white" position="absolute" top="23px" left="0px">
                <Box w="92.5%" m="auto" display="flex" justifyContent="space-between">
                    <Box>
                        <Image m="0px" mr="30px" h="44px" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Select variant='outline' placeholder='English'>
                            <option>हिन्दी</option>
                        </Select>
                        <Button ml="15px" border="none" rounded="5px" h="35px" w="140px" fontSize="16px" bg="#E50914" color="white">Sign In</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="55px">Unlimited movies, TV shows and more.</Text>
                <Text fontSize="25px">Watch anywhere. Cancel anytime.</Text>
                <Text fontSize="18px">Ready to watch? Enter your email to create or restart your membership.</Text>
            </Box>
    </Box>
}

export default GetStarted;