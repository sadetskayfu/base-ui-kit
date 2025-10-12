import * as React from 'react';
import classNames from 'classnames';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { bgColorPropDef, extractProps, type BgColorProp } from '@/shared/lib/utilities-props';
import styles from './menu-sticky-group-label.module.scss';

/**
 * Renders a `<div>` element.
 */
export const MenuStickyGroupLabel = React.forwardRef(function MenuStickyGroupLabel(
	props: MenuStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { bgColor = 'grey-2' } = props;

	const { render, className, ...otherProps } = extractProps(
		{ ...props, bgColor },
		bgColorPropDef
	);

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

export namespace MenuStickyGroupLabel {
	export interface State {}
	export interface Props
		extends Pick<
				useRenderElement.ModernComponentProps<'div', State>,
				'render' | 'children' | 'className'
			>,
			BgColorProp {}
}
