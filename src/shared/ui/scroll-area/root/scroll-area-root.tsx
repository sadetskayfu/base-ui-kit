import classNames from 'classnames';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react';
import { ScrollAreaViewport } from '../viewport/scroll-area-viewport';
import { ScrollAreaScrollbar } from '../scrollbar/scroll-area-scrollbar';
import {
	bgColorPropDef,
	borderPropDef,
	extractProps,
	heightPropDefs,
	marginPropDefs,
	radiusPropDef,
	widthPropDefs,
	type BgColorProp,
	type BorderProp,
	type HeightProps,
	type MarginProps,
	type RadiusProp,
	type WidthProps,
} from '@/shared/lib/utilities-props';
import styles from './scroll-area-root.module.scss';

export function ScrollAreaRoot(props: ScrollAreaRoot.Props) {
	const { radius, border, bgColor, height, maxHeight, minHeight, ...rootProps } = props;

	const {
		children,
		className,
		viewportClassName,
		orientation = 'vertical',
		overflowShadow,
		alwaysVisibleScrollbar,
		hiddenScrollbar,
		scrollbarMargin = true,
		tabIndex = -1,
		...otherProps
	} = extractProps(rootProps, marginPropDefs, widthPropDefs);

	const visibleScrollbarX = !hiddenScrollbar &&  (orientation === 'horizontal' || orientation === 'both');
	const visibleScrollbarY = !hiddenScrollbar && (orientation === 'vertical' || orientation === 'both');

	const viewportProps = extractProps(
		{ radius, border, bgColor, height, maxHeight, minHeight },
		radiusPropDef,
		borderPropDef,
		bgColorPropDef,
		heightPropDefs
	);

	return (
		<BaseScrollArea.Root
			className={classNames(styles['scroll-area'], className)}
			{...otherProps}
		>
			<ScrollAreaViewport
				tabIndex={tabIndex}
				overflowShadow={overflowShadow}
				className={classNames(viewportProps.className, viewportClassName)}
				style={viewportProps.style}
				orientation={orientation === 'horizontal' ? 'horizontal' : 'vertical'}
			>
				{children}
				{visibleScrollbarY && (
					<ScrollAreaScrollbar
						alwaysVisible={alwaysVisibleScrollbar}
						orientation="vertical"
						margin={scrollbarMargin}
					/>
				)}
				{visibleScrollbarX && (
					<ScrollAreaScrollbar
						alwaysVisible={alwaysVisibleScrollbar}
						orientation="horizontal"
						margin={scrollbarMargin}
					/>
				)}
				{visibleScrollbarX && visibleScrollbarY && <BaseScrollArea.Corner />}
			</ScrollAreaViewport>
		</BaseScrollArea.Root>
	);
}

export namespace ScrollAreaRoot {
	export interface Props
		extends RadiusProp,
			MarginProps,
			BorderProp,
			BgColorProp,
			WidthProps,
			HeightProps {
		children?: React.ReactNode;
		className?: string;
		viewportClassName?: string;
		orientation?: 'horizontal' | 'vertical' | 'both';
		overflowShadow?: boolean;
		alwaysVisibleScrollbar?: boolean;
		hiddenScrollbar?: boolean
		scrollbarMargin?: boolean
		tabIndex?: number;
	}
}
