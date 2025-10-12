
import './styles/index.scss';
import { FieldSection } from '@/widgets/field-section';
import { MenuSection } from '@/widgets/menu-section';
import { SelectSection } from '@/widgets/select-section';
import { Flex } from '@/shared/ui/components/flex';
import { PopoverSection } from '@/widgets/popover-section';
import { TooltipSection } from '@/widgets/tooltip-section';

export function App() {
	return (
		<div className="container" style={{ backgroundColor: 'var(--accent-12)' }}>
			<Flex direction="column" gap="9" mt='9'>
				<MenuSection />
				<SelectSection />
				<PopoverSection />
				<TooltipSection />
				<FieldSection />
			</Flex>
		</div>
	);
}
