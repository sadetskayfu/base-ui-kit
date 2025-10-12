import * as React from 'react';
import classNames from 'classnames';

import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import { useRenderElement } from '@/shared/hooks';
import { textPropDefs, type TextOwnProps } from './text.props';

export const Text = React.forwardRef(function Text(
	props: Text.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) { 
	const {
		tag = 'span',
		render,
		className,
		...otherProps
	} = extractProps(props, textPropDefs, marginPropDefs);

	return useRenderElement(tag, {
		render,
		ref: forwardedRef,
		props: [
			{
				className: classNames('yar-Text', className),
			},
			otherProps,
		],
	});
});

export namespace Text {
	export interface State {}
	export interface Props
		extends useRenderElement.ModernComponentProps<'div', State>,
			MarginProps,
			TextOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
}
