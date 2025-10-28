import classNames from 'classnames';
import { BaseRadio } from '../base/radio';
import { Flex } from '../flex';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { useFormGroupContext } from '../form-group';
import styles from './radio-card.module.scss';

export function RadioCard(props: RadioCard.Props) {
	const {
		children,
		className,
		align = 'center',
		px = '4',
		py = '3',
		gapX = '4',
		radius = '3',
		disabled,
		readOnly,
		...otherProps
	} = props;

	const { containerRef, ripples, removeRipple, ...rippleHandlers } = useRipple({
		disableRipple: disabled,
	});

	const groupContext = useFormGroupContext();

	return (
		<BaseRadio.Root
			className={classNames(styles['radio-card'], className)}
			nativeButton={false}
			disabled={disabled || groupContext?.disabled}
			readOnly={readOnly || groupContext?.readOnly}
			render={<Flex align={align} gapX={gapX} px={px} py={py} radius={radius} />}
			{...rippleHandlers}
			{...otherProps}
		>
			{children}
			<span className={styles['radio']} />
			<Ripple ref={containerRef} ripples={ripples} removeRipple={removeRipple} />
		</BaseRadio.Root>
	);
}

export namespace RadioCard {
	export interface Props extends Omit<BaseRadio.Root.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
