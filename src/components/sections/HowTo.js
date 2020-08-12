import React from 'react';
import { Flex, Heading, Icon, Grid, Box, Stack, Text } from '@chakra-ui/core';

const HowTo = () => {
	return (
		<Flex justify="center" align="center" direction="column" m={2}>
			<Heading color="teal.500" as="h2" size="2xl">
				Grinding in 3 steps
			</Heading>
			<br />
			<br />
			<Stack flexDirection={[ 'column', 'column', 'row', 'row' ]} w={[ '90%', '85%', '70%', '70%' ]}>
				<Flex w="100%" direction="column" p={4} m={2}>
					<Icon name="check-circle" size="42px" color="teal.400" />
					<br />
					<Heading size="lg">List your space for free</Heading>
					<br />

					<Text>
						Share any space without sign-up charges, from a shared living room to a second home and
						everything in-between.
					</Text>
				</Flex>
				<Flex w="100%" direction="column" p={4} m={2}>
					<Icon name="check-circle" size="42px" color="teal.400" />
					<br />
					<Heading size="lg">Decide how you want to host</Heading>
					<br />

					<Text>
						Choose your own schedule, prices, and requirements for guests. We’re there to help along the
						way.
					</Text>
				</Flex>
				<Flex w="100%" direction="column" p={4} m={2}>
					<Icon name="check-circle" size="42px" color="teal.400" />
					<br />
					<Heading size="lg">Welcome your first guest</Heading>
					<br />

					<Text>
						Once your listing is live, qualified guests can reach out. You can message them with any
						questions before their stay.
					</Text>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default HowTo;
