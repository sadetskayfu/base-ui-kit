import classNames from 'classnames';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react';
import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import styles from './scroll-area-root.module.scss';

export function ScrollAreaRoot(props: ScrollAreaRoot.Props) {
	const { className, ...otherProps } = extractProps(props, marginPropDefs);

	return (
		<BaseScrollArea.Root
			className={classNames(styles['scroll-area'], className)}
			{...otherProps}
		/>
	);
}

export namespace ScrollAreaRoot {
	export interface Props extends Omit<BaseScrollArea.Root.Props, 'className'>, MarginProps {
		className?: string;
	}
}
