
import './styles/index.scss';
import { FieldSection } from '@/widgets/field-section';
import { MenuSection } from '@/widgets/menu-section';
import { SelectSection } from '@/widgets/select-section';
import { Flex } from '@/shared/ui/components/flex';
import { PopoverSection } from '@/widgets/popover-section';
import { TooltipSection } from '@/widgets/tooltip-section';
import { ButtonSection } from '@/widgets/button-section';
import { Accordion } from '@/shared/ui/components/accordion';
import styles from './app.module.scss'
import { ComboboxSection } from '@/widgets/combobox-section';
import { DialogSection } from '@/widgets/dialog-section';
import { ChipSection } from '@/widgets/chip-section';
import { AvatarSection } from '@/widgets/avatar-section';

export function App() {
	return (
		<div className="container" style={{ backgroundColor: 'var(--accent-12)' }}>
			<Flex direction="column" gap="9" mt='9'>
				<button className={styles['btn']}>
					Купить
					<span />
					<span />
				</button>
				<MenuSection />
				<Accordion.Root>
					<ButtonSection />
					<ChipSection />
					<AvatarSection />
				</Accordion.Root>
				
				<DialogSection />
				<SelectSection />
				<PopoverSection />
				<TooltipSection />
				<ComboboxSection />
				<FieldSection />
			</Flex>
		</div>
	);
}
