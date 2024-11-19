import React from "react";
import { VStack, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => (
  <VStack
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    align="stretch"
    spacing={4}
    p={4}
  >
    <Image src={imageSrc} alt={title} />
    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
    <HStack>
      <Text>View More</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </HStack>
  </VStack>
);

export default Card;
