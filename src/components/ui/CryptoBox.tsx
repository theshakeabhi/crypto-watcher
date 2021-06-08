import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';

const CryptoBox = () => {
	return (
		<>
			<Box borderRadius={20} bg="blackAlpha.100" w="sm" height="md" padding={4}>
				<VStack>
					<Flex justifyContent="space-arounds" alignItems="center" w="full" mb={2}>
						<Avatar></Avatar>
						<Text ml={2} fontSize="xl">
							Name
						</Text>
					</Flex>
					<Flex>
						<Box width="30vh" height="15vh" bg="blackAlpha.300" borderRadius={20}>
							<Flex h="full" w="full" justifyContent="center" alignItems="center">
								<Text>graph</Text>
							</Flex>
						</Box>
					</Flex>
					<HStack p={4}>
						<Tooltip label="One Day">
							<Button bg="blackAlpha.300" size="sm">
								1D
							</Button>
						</Tooltip>
						<Tooltip label="One Week">
							<Button bg="blackAlpha.300" size="sm">
								1W
							</Button>
						</Tooltip>
						<Tooltip label="One Month">
							<Button bg="blackAlpha.300" size="sm">
								1M
							</Button>
						</Tooltip>
						<Tooltip label="One Year">
							<Button bg="blackAlpha.300" size="sm">
								1Y
							</Button>
						</Tooltip>
						<Tooltip label="Three Years">
							<Button bg="blackAlpha.300" size="sm">
								3Y
							</Button>
						</Tooltip>
						<Tooltip label="Five Years">
							<Button bg="blackAlpha.300" size="sm">
								5Y
							</Button>
						</Tooltip>
					</HStack>
					<Flex h="full" w="full" justifyContent="space-around">
						<Flex w="40%" justifyContent="space-around">
							<Text as="b">Highest:</Text>
							<Text>10202</Text>
						</Flex>
						<Flex w="40%" justifyContent="space-around">
							<Text as="b">Lowest:</Text>
							<Text>10202</Text>
						</Flex>
					</Flex>
					<Flex>
						<Button bg="blackAlpha.400">Click Here to get Notified</Button>
					</Flex>
				</VStack>
			</Box>
		</>
	);
};

export default CryptoBox;
