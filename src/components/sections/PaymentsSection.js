import React from 'react';
import { Flex, Heading, Icon, Grid, Box, Stack, Text } from '@chakra-ui/core';

const PaymentsSection = () => {
	return (
		<Flex justify="center" align="center" direction="column" m={2}>
			<Heading color="teal.500" as="h2" size="2xl">
				Payments made simple
			</Heading>
			<br />
			<br />
			<Stack flexDirection={[ 'column', 'column', 'row', 'row' ]} w={[ '90%', '85%', '70%', '70%' ]}>
				<Flex w="100%" direction="column" p={4} m={2}>
					<br />
					<Heading size="lg">Charge what you want</Heading>
					<br />

					<Text>
						You always get to pick your price. Need help? We have tools to help you match demand in your
						area.
					</Text>
				</Flex>
				<Flex w="100%" direction="column" p={4} m={2}>
					<br />
					<Heading size="lg">Pay low fees</Heading>
					<br />

					<Text>
						There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the
						lowest fees in the industry.
					</Text>
				</Flex>
				<Flex w="100%" direction="column" p={4} m={2}>
					<br />
					<Heading size="lg">Get paid quickly</Heading>
					<br />

					<Text>
						Once a guest checks in, we can send your money by Paypal, direct deposit, or other available
						methods.
					</Text>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default PaymentsSection;
