import classNames from 'classnames';
import { BaseCheckbox } from '../base/checkbox';
import { Flex } from '../flex';
import { Icon } from '../icons';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { useFormGroupContext } from '../form-group';
import styles from './checkbox-card.module.scss';

export function CheckboxCard(props: CheckboxCard.Props) {
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
		<BaseCheckbox.Root
			className={classNames(styles['checkbox-card'], className)}
			disabled={disabled || groupContext?.disabled}
			readOnly={readOnly || groupContext?.readOnly}
			render={
				<Flex
					align={align}
					gapX={gapX}
					px={px}
					py={py}
					radius={radius}
					render={<button />}
				/>
			}
			{...rippleHandlers}
			{...otherProps}
		>
			{children}
			<span className={styles['checkbox']}>
				<Icon.Check className={styles['check-icon']} />
			</span>
			<Ripple ref={containerRef} ripples={ripples} removeRipple={removeRipple} />
		</BaseCheckbox.Root>
	);
}

export namespace CheckboxCard {
	export interface Props extends Omit<BaseCheckbox.Root.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
