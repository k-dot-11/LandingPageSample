import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button, Icon } from '@chakra-ui/core';

const MenuItems = ({ children, isLast, to = '/', ...rest }) => {
	return (
		<Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} display="block" {...rest}>
			<Link to={to}>{children}</Link>
		</Text>
	);
};

export const Header = (props) => {
	const [ show, setShow ] = React.useState(false);
	const toggleMenu = () => setShow(!show);

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={5}
			bg="teal.500"
			color="white"
			zIndex={10}
			position='fixed'
			{...props}
		>
			<Flex align="center">
				<Text fontSize={["xl" , "2xl" , "3xl" , "3xl"]} fontWeight='bold'>The Bugshed</Text>
			</Flex>

			<Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
				{show ? <Icon name='close'/>: <Icon name='drag-handle' size='20px'/>}
			</Box>

			<Box display={{ base: show ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
				<Flex
					align="center"
					justify={[ 'center', 'space-between', 'flex-end', 'flex-end' ]}
					direction={[ 'column', 'row', 'row', 'row' ]}
					pt={[ 4, 4, 0, 0 ]}
				>
					<MenuItems to="/">Home</MenuItems>
					<MenuItems to="/how">How It works </MenuItems>
					<MenuItems to="/features">Features </MenuItems>
					<MenuItems to="/pricing">Pricing </MenuItems>
					<MenuItems to="/signup" isLast>
						<Button
							size="sm"
							rounded="md"
							color="teal.500"
							bg={[ 'white', 'white', 'primary.500', 'primary.500' ]}
							_hover={{
								bg: [ 'primary.100', 'primary.100', 'primary.600', 'primary.600' ]
							}}
						>
							Create Account
						</Button>
					</MenuItems>
				</Flex>
			</Box>
		</Flex>
	);
};
