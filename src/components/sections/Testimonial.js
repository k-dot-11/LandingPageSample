import React from 'react';
import { Flex, Text, Button, Image, Box } from '@chakra-ui/core';

const Testimonial = () => {
	return (
		<Flex direction="row" justify="center" w='100%'>
			<Flex justify="center" direction="column" m={6}>
				<Text fontSize="3xl">
					The Host Guarantee helped<br /> me decide to join Airbnb <br />because I have it to fall back<br />{' '}
					on if there's damage or problems.
				</Text>
				<br />
				<Text>Dennis hosts in London for the flexibility it provides</Text>
				<br />
				<Button
					variantColor="teal"
					borderRadius="8px"
					py="4"
					w="md"
					px="4"
					lineHeight="1"
					size="md"
					rightIcon="chevron-right"
				>
					Learn how they host
				</Button>
			</Flex>
			<Flex w={{ base: '40%', sm: '60%', md: '30%' }} m={6} h='10%' justify="center">
				<Image
					src="https://images.unsplash.com/photo-1560031788-093b3a661715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
					rounded="1rem"
					size='55%'
					shadow="2xl"
				/>
			</Flex>
		</Flex>
	);
};

export default Testimonial;
