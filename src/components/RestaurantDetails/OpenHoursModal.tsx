import React from 'react';
import {
	Flex,
	Text,
	Divider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { OpenHours } from '../../generated/graphql';
import { getDailyHoursInfo } from '../../utils/helper';

export function OpenHoursModal({
	isOpen,
	onClose,
	dailyOpenHours,
}: {
	isOpen: boolean;
	onClose: () => void;
} & OpenHours) {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Flex
							alignItems='center'
							flexDirection='row'
							justifyContent='space-between'
						>
							<ModalCloseButton />
							<Text fontSize='20px' fontWeight='600'>
								Open Hours
							</Text>
						</Flex>
						<Divider
							marginBottom='20px'
							marginTop='10px'
							orientation='horizontal'
						/>
						{dailyOpenHours && (
							<Flex flexDirection='column'>
								{dailyOpenHours.map((dailyHours, index) => {
									const hours = dailyHours && getDailyHoursInfo(dailyHours);
									return (
										dailyHours && (
											<Flex
												key={index}
												color={hours?.isCurrentDay ? '#05c880' : ''}
												fontWeight={hours?.isCurrentDay ? '600': ''}
											>
												<Text width='30%'>{hours?.dayOfWeek}</Text>
												<Text>{hours?.openTime}</Text>
											</Flex>
										)
									);
								})}
							</Flex>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
