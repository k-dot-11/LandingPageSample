import React from 'react';
import { Header } from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import FeaturesStack from '../components/sections/FeaturesStack';
import { ThemeProvider, CSSReset, Heading, Text, Flex, Image } from '@chakra-ui/core';
import HowTo from '../components/sections/HowTo';
import Testimonial from '../components/sections/Testimonial';
import Assurances from '../components/sections/Assurances';
import PaymentsSection from '../components/sections/PaymentsSection';

const LandingPage = () => {
	return (
		<ThemeProvider>
			<CSSReset />
			<Header />
			<br />
			<br />
			<Flex direction="column" justify="center">
				<Hero />
				<FeaturesStack />
				<br />
				<br />
				<HowTo />
				<br />
				<br />
				<br />
				<Testimonial />
				<br />
				<br />
				<Text fontSize="6xl" textAlign="center" color="teal.500">
					We’ve got you covered
				</Text>
				<br />
				<br />

				<Assurances />
				<br />
				<br />
				<PaymentsSection />
			</Flex>
		</ThemeProvider>
	);
};

export default LandingPage;
