import classNames from 'classnames';
import { BaseSeparator } from '../base';
import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import styles from './separator.module.scss';

export function Separator(props: Separator.Props) {
	const { className, ...otherProps } = extractProps(props, marginPropDefs);

	return (
		<BaseSeparator
			className={classNames(styles['separator'], 'yar-radius-full', className)}
			{...otherProps}
		/>
	);
}

export namespace Separator {
	export interface Props extends Omit<BaseSeparator.Props, 'className'>, MarginProps {
		className?: string;
	}
}
