import React from 'react';
import { VStack, Flex, Tooltip, IconButton, Text } from '@chakra-ui/react';
import { BiRss, BiCaretDown, BiCaretUp } from 'react-icons/bi';

const SideNav = () => {
	return (
		<>
			<VStack padding={2} alignItems="center">
				<Flex alignItems="center" justifyContent="space-between" w="full">
					<Tooltip label="Trending">
						<IconButton icon={<BiRss />} aria-label="bi rass" />
					</Tooltip>
					<Text>Trending</Text>
				</Flex>
				<Flex alignItems="center" justifyContent="space-between" w="full">
					<Tooltip label="profit">
						<IconButton icon={<BiCaretUp />} aria-label="bi rass" />
					</Tooltip>
					<Text>Profit</Text>
				</Flex>
				<Flex alignItems="center" justifyContent="space-between" w="full">
					<Tooltip label="loss">
						<IconButton icon={<BiCaretDown />} aria-label="bi rass" />
					</Tooltip>
					<Text>Loss</Text>
				</Flex>
			</VStack>
		</>
	);
};

export default SideNav;
