import React from 'react';
import { Flex, Heading, Text, Stack, Icon, Image, Box } from '@chakra-ui/core';

const Assurances = () => {
	return (
		<Box justify="center" textAlign="center">
			<Flex direction="row" justify="center" justifySelf="center">
				<Flex justify="center" direction="column" m={6} w="30%">
					<Text fontSize="xl">
						We know it’s a priority to trust the people staying in your home. Airbnb allows you to set
						strict requirements for who can book and to get to know guests before their stay. If something
						does come up, though, we have your back. With our Host Guarantee covering property damage and
						our Host Protection Insurance for liability, you’re supported as a host throughout.
					</Text>
					<br />
				</Flex>
				<Flex justify="center" direction="column" m={6} w="30%">
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">Ability to require government ID before booking</Text>
					</Flex>
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">House Rules guests must agree to</Text>
					</Flex>
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">Chance to read reviews from past trips</Text>
					</Flex>
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">Free $1M protection for property damage</Text>
					</Flex>
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">Free $1M liability insurance</Text>
					</Flex>
					<Flex align="center">
						<Icon name="check" mx={4} color="teal.500" />
						<Text fontSize="xl">24/7 global customer support</Text>
					</Flex>
					<br />
				</Flex>
			</Flex>
            <br />
            <br />
			<Flex justify="center" align="center" direction="column" m={2} >
				<Image src="https://a0.muscache.com/pictures/bb358a46-fa25-4895-b5fd-048a386bdcac.jpg" size='55%'/>
			</Flex>
		</Box>
	);
};

export default Assurances;
