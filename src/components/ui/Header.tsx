import React from 'react';
import { Flex, Image, Text, Input } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ui/ColorModeSwitcher';
import Logo from '../../logo.svg';

const Header = () => {
	return (
		<>
			<Flex w="full" h="full" maxW={20} p={2}>
				<Image src={Logo} />
			</Flex>
			<Flex w="full" h="full" maxW="sm" padding={6}>
				<Text>Get Notfied about the crytocurrency price here</Text>
			</Flex>
			<Flex w="full" h="full" flex={1} p={5}>
				<Input placeholder="Search" borderRadius={20} />
			</Flex>
			<Flex w="full" h="full" maxW={40} padding={5}>
				<ColorModeSwitcher />
				<ColorModeSwitcher />
			</Flex>
		</>
	);
};

export default Header;
