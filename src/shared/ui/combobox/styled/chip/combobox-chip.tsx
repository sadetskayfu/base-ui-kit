import { Chip } from '@/shared/ui/chip';
import { BaseCombobox } from '../../base';

export function ComboboxChip(props: ComboboxChip.Props) {
	const { children, ...otherProps } = props;

	return (
		<BaseCombobox.Chip render={<Chip.Root color="secondary" />} {...otherProps}>
			{children}
			<BaseCombobox.ChipRemove render={<Chip.Close />} />
		</BaseCombobox.Chip>
	);
}

export namespace ComboboxChip {
	export interface Props
		extends Omit<BaseCombobox.Chip.Props, 'className'>,
			Pick<Chip.Root.Props, 'size' | 'radius' | 'className'> {}
}
