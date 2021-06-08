import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CryptoBox from '../ui/CryptoBox';

const MainSection = () => {
	return (
		<>
			<SimpleGrid columns={3} spacing="40px">
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
				<CryptoBox />
			</SimpleGrid>
		</>
	);
};

export default MainSection;
