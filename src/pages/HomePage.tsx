import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import Header from '../components/ui/Header';
import SideNav from '../components/ui/SideNav';
import MainSection from '../components/main/MainSection';

const HomePage = () => {
	return (
		<>
			<HStack h="9vh" spacing={0}>
				<Header />
			</HStack>
			<HStack h="91vh" spacing={1}>
				<Flex as="nav" h="full" w="full" maxW={40} justifyContent="space-around">
					<SideNav />
				</Flex>
				<Flex as="main" h="full" w="full" flex={1} padding={2}>
					<MainSection />
				</Flex>
			</HStack>
		</>
	);
};

export default HomePage;
