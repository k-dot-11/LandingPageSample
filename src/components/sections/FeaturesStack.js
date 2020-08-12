import React from 'react';
import { Stack, Heading, Text, Box } from '@chakra-ui/core';

const FeaturesStack = () => {
	return (
		<Stack  flexDirection={[ 'column', 'column', 'row', 'row' ]} justify="center">
			<Box p={8} textAlign='center' shadow='sm'  align="center" maxW="md" minH="3xs" mx={4}>
				<Heading  color='teal.500' fontSize="xl">Why host on Airbnb?</Heading>
				<Text mt={4}>
					No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host
					travelers. You’re in full control of your availability, prices, house rules, and how you interact
					with guests.
				</Text>
			</Box>
			<Box p={8} textAlign='center' shadow='sm'  alignItems="center" maxW="md" minH="3xs" mx={4}>
				<Heading color='teal.500' fontSize="xl">We have your back</Heading>
				<Text mt={4}>
					To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property
					damage protection and another $1M USD in insurance against accidents.
				</Text>
			</Box>
            <Box p={8} textAlign='center' shadow='sm'  alignItems="center" maxW="md" minH="3xs" mx={4}>
				<Heading color='teal.500' fontSize="xl">We have your back</Heading>
				<Text mt={4}>
					To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property
					damage protection and another $1M USD in insurance against accidents.
				</Text>
			</Box>
		</Stack>
	);
};

export default FeaturesStack;
