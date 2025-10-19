import * as React from 'react';
import classNames from 'classnames';
import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import { useRenderElement } from '@/shared/hooks';
import { textPropDefs, type TextOwnProps } from './text.props';
import styles from './text.module.scss';

export const Text = React.forwardRef(function Text(
	props: Text.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		tag = 'span',
		render,
		className,
		size,
		...otherProps
	} = extractProps(props, textPropDefs, marginPropDefs);

	return useRenderElement(tag, {
		render,
		ref: forwardedRef,
		props: [
			{
				className: classNames(styles['text'], size && styles[`size-${size}`], className),
			},
			otherProps,
		],
	});
});

export namespace Text {
	export interface State {}

	export interface OwnProps extends MarginProps, TextOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
		size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
	}

	export interface Props
		extends useRenderElement.ModernComponentProps<'div', State>, OwnProps {}
}
