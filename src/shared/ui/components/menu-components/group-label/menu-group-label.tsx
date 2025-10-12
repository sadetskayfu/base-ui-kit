import * as React from 'react';
import classNames from 'classnames';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import styles from './menu-group-label.module.scss';

/**
 * Renders a `<div>` element.
 */
export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
	props: MenuGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, className, ...otherProps } = props;

	return useRenderElement('div', {
		render,
		ref: forwardedRef,
		props: [
			{
				className: classNames(styles['group-label'], className),
			},
			otherProps,
		],
	});
});

export namespace MenuGroupLabel {
	export interface State {}
	export interface Props
		extends Pick<
			useRenderElement.ModernComponentProps<'div', State>,
			'render' | 'children' | 'className'
		> {}
}
