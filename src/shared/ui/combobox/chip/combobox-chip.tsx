import { Chip } from '../../chip';
import { BaseCombobox } from '../../base/combobox';

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
	export interface Props extends Omit<BaseCombobox.Chip.Props, 'className'>, Chip.Root.OwnProps {
		className?: string;
	}
}
