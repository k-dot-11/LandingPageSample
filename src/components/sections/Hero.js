import React from 'react';
import { Flex, Box, Image, Stack, Heading, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const Hero = (props) => {
	return (
		<Flex
			align="center"
			justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
			direction={{ base: 'column', md: 'row' }}
			wrap="nowrap"
			minH="70vh"
			shadow="xl"
			px={8}
			mb={16}
			mu={10}
			pb={5}
		>
			<Box w={{ base: '80%', sm: '60%', md: '50%' }} m={{ base: 12, md: 0 }}>
				<Image
					src="https://images.unsplash.com/photo-1515877717189-fe435f7b59aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
					size="100%"
					rounded="1rem"
					shadow="2xl"
				/>
			</Box>
			<Stack
				spacing={4}
				w={{ base: '80%', md: '40%' }}
				align={[ 'center', 'center', 'flex-start', 'flex-start' ]}
			>
				<Heading
					size="xl"
					fontWeight="bold"
					color="teal.700"
					textAlign={[ 'center', 'center', 'left', 'left' ]}
				>
					This is the hero heading
				</Heading>
				<Heading
					size="md"
					fontWeight="bold"
					opacity="0.8"
					color="teal.800"
					textAlign={[ 'center', 'center', 'left', 'left' ]}
				>
					This is the hero sub-heading where i will put some more description
				</Heading>
				<Link to="/">
					<Button
						variantColor="teal"
						borderRadius="8px"
						py="4"
						px="4"
						lineHeight="1"
						size="md"
						rightIcon="chevron-right"
					>
						Get Started
					</Button>
				</Link>
			</Stack>
		</Flex>
	);
};

export default Hero;
