import { Accordion } from '@/shared/ui/components/accordion';
import { Flex } from '@/shared/ui/components/flex';
import { Text } from '@/shared/ui/components/text';

export function TextSection() {
	return (
		<Flex direction="column">
			<Accordion.Root>
				I am text <strong>strong</strong> text
				<Accordion.Item size="1" title="Text">
					<Flex direction="column" gap="2">
						<Text tag="p">
							Текст, в своем роде, состоит из некоторого количества предложений. Одно
							предложение, даже очень распространённое, сложное, текстом назвать
							нельзя, поскольку текст можно разделить на самостоятельные предложения,
							а части предложения сочетаются по законам синтаксиса сложного
							предложения, но не текста.
						</Text>
						<Text tag="p">
							Текст, в своем роде, состоит из некоторого количества предложений. Одно
							предложение, даже очень распространённое, сложное, текстом назвать
							нельзя, поскольку текст можно разделить на самостоятельные предложения,
							а части предложения сочетаются по законам синтаксиса сложного
							предложения, но не текста.
						</Text>
					</Flex>
				</Accordion.Item>
				<Accordion.Item size="2" title="Text 2">
					<Flex direction="column" gap="2">
						<Text size="1">Size 1</Text>
						<Text size="2">Size 2</Text>
						<Text size="3">Size 3</Text>
						<Text size="4">Size 4</Text>
						<Text size="5">Size 5</Text>
						<Text size="6">Size 6</Text>
						<Text size="7">Size 7</Text>
						<Text size="8">Size 8</Text>
						<Text size="9">Size 9</Text>
					</Flex>
				</Accordion.Item>
				<Accordion.Item size="3" title="Text 2">
					<Flex direction="column" gap="2">
						<Text size="1">Size 1</Text>
						<Text size="2">Size 2</Text>
						<Text size="3">Size 3</Text>
						<Text size="4">Size 4</Text>
						<Text size="5">Size 5</Text>
						<Text size="6">Size 6</Text>
						<Text size="7">Size 7</Text>
						<Text size="8">Size 8</Text>
						<Text size="9">Size 9</Text>
					</Flex>
				</Accordion.Item>
			</Accordion.Root>
		</Flex>
	);
}
