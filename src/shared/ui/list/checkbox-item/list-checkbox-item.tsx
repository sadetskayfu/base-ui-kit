import * as React from 'react';
import classNames from 'classnames';
import { ListItem } from '../item/list-item';
import { Icon } from '../../icons';
import styles from './list-checkbox-item.module.scss';

export const ListCheckboxItem = React.forwardRef(function ListCheckboxItem(
	props: ListCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<ListItem
			className={classNames(styles['checkbox-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['checkbox']}>
				<Icon.Check className={styles['check-icon']} />
			</span>
		</ListItem>
	);
});

export namespace ListCheckboxItem {
	export interface OwnProps extends ListItem.OwnProps {}
	export interface Props extends ListItem.Props {}
}
