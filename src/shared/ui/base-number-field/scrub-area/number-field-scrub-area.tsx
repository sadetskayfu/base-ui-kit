import classNames from 'classnames';
import { NumberField } from '@base-ui-components/react';
import styles from './number-field-scrub-area.module.scss';

export function NumberFieldScrubArea(props: NumberFieldScrubArea.Props) {
	const { children, className, ...otherProps } = props;

	return (
		<NumberField.ScrubArea
			className={classNames(styles['scrub-area'], [className])}
			{...otherProps}
		>
			{children}
			<NumberField.ScrubAreaCursor className={styles['scrub-area-cursor']}>
				<CursorGrowIcon />
			</NumberField.ScrubAreaCursor>
		</NumberField.ScrubArea>
	);
}

export namespace NumberFieldScrubArea {
	export interface Props extends Omit<NumberField.ScrubArea.Props, 'className'> {
		className?: string;
	}
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
	return (
		<svg
			width="26"
			height="14"
			viewBox="0 0 24 14"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
		</svg>
	);
}
