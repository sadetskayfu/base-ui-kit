import * as React from 'react';
import classNames from 'classnames';
import { ListItem } from '../item/list-item';
import styles from './list-radio-item.module.scss';

export const ListRadioItem = React.forwardRef(function ListRadioItem(
	props: ListRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<ListItem
			className={classNames(styles['radio-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['radio']} />
		</ListItem>
	);
});

export namespace ListRadioItem {
	export interface OwnProps extends ListItem.OwnProps {}
	export interface Props extends ListItem.Props {}
}
