import { useBreakpoints } from '@/shared/lib/breakpoints';
import { Button, ButtonProvider } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Grid } from '@/shared/ui/grid';

export function ButtonSection() {
	const { lg, md, sm, xs } = useBreakpoints();

	return (
		<Grid columns={lg ? '5' : md ? '4' : sm ? '3' : xs ? '2' : '1'} gap="3">
			<ButtonProvider radius="3">
				<Flex direction="column" gap="3">
					<Button color="accent" variant="filled">
						Accent filled
					</Button>
					<Button color="accent" variant="ghost">
						Accent ghost
					</Button>
					<Button color="accent" variant="outlined">
						Accent outlined
					</Button>
					<Button color="accent" variant="clear">
						Accent clear
					</Button>
				</Flex>
				<Flex direction="column" gap="3">
					<Button color="secondary" variant="ghost">
						Secondary ghost
					</Button>
					<Button color="secondary" variant="outlined">
						Secondary outlined
					</Button>
					<Button color="secondary" variant="clear">
						Secondary clear
					</Button>
				</Flex>
				<Flex direction="column" gap="3">
					<Button color="secondary-soft" variant="outlined">
						Secondary soft outlined
					</Button>
					<Button color="secondary-soft" variant="clear">
						Secondary soft clear
					</Button>
				</Flex>
				<Flex direction="column" gap="3">
					<Button color="success" variant="filled">
						Success filled
					</Button>
					<Button color="success" variant="ghost">
						Success ghost
					</Button>
					<Button color="success" variant="outlined">
						Success outlined
					</Button>
					<Button color="success" variant="clear">
						Success clear
					</Button>
				</Flex>
				<Flex direction="column" gap="3">
					<Button color="error" variant="filled">
						Error filled
					</Button>
					<Button color="error" variant="ghost">
						Error ghost
					</Button>
					<Button color="error" variant="outlined">
						Error outlined
					</Button>
					<Button color="error" variant="clear">
						Error clear
					</Button>
				</Flex>
			</ButtonProvider>
		</Grid>
	);
}
