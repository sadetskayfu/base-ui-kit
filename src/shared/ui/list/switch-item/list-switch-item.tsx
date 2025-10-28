import * as React from 'react';
import classNames from 'classnames';
import { ListItem } from '../item/list-item';
import styles from './list-switch-item.module.scss';

export const ListSwitchItem = React.forwardRef(function ListSwitchItem(
	props: ListSwitchItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<ListItem
			className={classNames(styles['switch-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['switch']} />
		</ListItem>
	);
});

export namespace ListSwitchItem {
	export interface OwnProps extends ListItem.OwnProps {}
	export interface Props extends ListItem.Props {}
}
