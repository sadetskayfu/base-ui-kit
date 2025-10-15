import { Accordion, AccordionGroup } from '@/shared/ui/accordion';
import { PaginationSection } from './pagination/pagination-section';
import { Flex } from '@/shared/ui/flex';
import { MenuSection } from './menu/menu-section';
import { AvatarSection } from './avatar/avatar-section';
import { FieldSection } from './field/field-section';
import { PopoverSection } from './popover/popover-section';
import { AlertSection } from './alert/alert-section';
import { ToastSection } from './toast/toast-section';
import { TooltipSection } from './tooltip/tooltip-section';
import { ComboboxSection } from './combobox/combobox-section';
import { ChipSection } from './chip/chip-section';
import { SelectSection } from './select/select-section';
import { DialogSection } from './dialog/dialog-section';
import { TabsSection } from './tabs/tabs-section';
import { BadgeSection } from './badge/badge-section';
import { SkeletonSection } from './skeleton/skeleton-section';
import { StarRatingSection } from './star-rating/star-rating-section';
import { ButtonSection } from './button/button-section';

export function Example() {
	return (
		<AccordionGroup render={<Flex direction="column" gap="2" />}>
			<Accordion title="Button" radius="5">
				<ButtonSection />
			</Accordion>
			<Accordion title="Pagination" radius="5">
				<PaginationSection />
			</Accordion>
			<Accordion title="Chip" radius="5">
				<ChipSection />
			</Accordion>
			<Accordion title="Menu" radius="5">
				<MenuSection />
			</Accordion>
			<Accordion title="Avatar" radius="5">
				<AvatarSection />
			</Accordion>
			<Accordion title="Field" radius="5">
				<FieldSection />
			</Accordion>
			<Accordion title="Combobox" radius="5">
				<ComboboxSection />
			</Accordion>
			<Accordion title="Select" radius="5">
				<SelectSection />
			</Accordion>
			<Accordion title="Dialog" radius="5">
				<DialogSection />
			</Accordion>
			<Accordion title="Popover" radius="5">
				<PopoverSection />
			</Accordion>
			<Accordion title="Tooltip" radius="5">
				<TooltipSection />
			</Accordion>
			<Accordion title="Alert" radius="5">
				<AlertSection />
			</Accordion>
			<Accordion title="Toast" radius="5">
				<ToastSection />
			</Accordion>
			<Accordion title="Tabs" radius="5">
				<TabsSection />
			</Accordion>
			<Accordion title="Badge" radius="5">
				<BadgeSection />
			</Accordion>
			<Accordion title="Skeleton" radius="5">
				<SkeletonSection />
			</Accordion>
			<Accordion title="Star rating" radius="5">
				<StarRatingSection />
			</Accordion>
		</AccordionGroup>
	);
}
