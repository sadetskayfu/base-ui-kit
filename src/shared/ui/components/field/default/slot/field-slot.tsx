import classNames from 'classnames';
import { extractProps, paddingPropDefs, type GetPropDefTypes } from '@/shared/lib/utilities-props';
import { flexPropDefs } from '@/shared/ui/components/flex/flex.props';
import styles from './field-slot.module.scss';

const fieldSlotPropDefs = {
	gap: flexPropDefs.gap,
	px: paddingPropDefs.px,
	pl: paddingPropDefs.pl,
	pr: paddingPropDefs.pr,
} satisfies {
	gap: typeof flexPropDefs.gap;
	px: typeof paddingPropDefs.px;
	pl: typeof paddingPropDefs.pl;
	pr: typeof paddingPropDefs.pr;
};

type FieldSlotUProps = GetPropDefTypes<typeof fieldSlotPropDefs>;

export function FieldSlot(props: FieldSlot.Props) {
	const { className, side, separator, ...otherProps } = extractProps(props, fieldSlotPropDefs);

	return (
		<div data-side={side} className={classNames(styles['slot'], {[styles['separator']]: separator}, className)} {...otherProps} />
	);
}

export namespace FieldSlot {
	export interface Props extends React.ComponentProps<'div'>, FieldSlotUProps {
		side: 'left' | 'right';
		separator?: boolean;
	}
}
