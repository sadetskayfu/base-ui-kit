import classNames from 'classnames';
import { BaseScrollArea } from '../../base/scroll-area';
import {
	bgColorPropDef,
	borderPropDef,
	extractProps,
	heightPropDefs,
	radiusPropDef,
	widthPropDefs,
	type BgColorProp,
	type BorderProp,
	type HeightProps,
	type RadiusProp,
	type WidthProps,
} from '@/shared/lib/utilities-props';
import styles from './scroll-area-viewport.module.scss';

export function ScrollAreaViewport(props: ScrollAreaViewport.Props) {
	const { children, className, overflowShadowColor, orientation, ...otherProps } = extractProps(
		props,
		bgColorPropDef,
		borderPropDef,
		heightPropDefs,
		widthPropDefs,
		radiusPropDef
	);

	return (
		<BaseScrollArea.Viewport
			className={classNames(
				styles['viewport'],
				{
					[styles[`orientation-${orientation}`]]: orientation,
					[styles[`overflow-shadow`]]: overflowShadowColor,
					[styles[`overflow-shadow-color-${overflowShadowColor}`]]: overflowShadowColor,
				},
				className
			)}
			{...otherProps}
		>
			{overflowShadowColor && (
				<span className={classNames(styles['shadow'], styles['start-shadow'])} />
			)}
			{children}
			{overflowShadowColor && (
				<span className={classNames(styles['shadow'], styles['end-shadow'])} />
			)}
		</BaseScrollArea.Viewport>
	);
}

export namespace ScrollAreaViewport {
	export interface Props
		extends Omit<BaseScrollArea.Viewport.Props, 'className'>,
			RadiusProp,
			BorderProp,
			BgColorProp,
			WidthProps,
			HeightProps {
		className?: string;
		overflowShadowColor?: 'grey-1' | 'grey-2';
		orientation?: 'horizontal' | 'vertical';
	}
}
