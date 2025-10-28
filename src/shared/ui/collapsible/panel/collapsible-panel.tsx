import * as React from 'react';
import classNames from 'classnames';
import { BaseCollapsible } from '../../base/collapsible';
import styles from './collapsible-panel.module.scss';

export const CollapsiblePanel = React.forwardRef(function CollapsiblePanel(
	props: CollapsiblePanel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { className, ...otherProps } = props;

	return (
		<BaseCollapsible.Panel
			className={classNames(styles['panel'], className)}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace CollapsiblePanel {
	export interface Props extends Omit<BaseCollapsible.Panel.Props, 'className'> {
		className?: string;
	}
}
