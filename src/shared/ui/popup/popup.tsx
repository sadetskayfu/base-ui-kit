import classNames from 'classnames';
import {
	bgColorPropDef,
	extractProps,
	gapPropDefs,
	heightPropDefs,
	paddingPropDefs,
	radiusPropDef,
	widthPropDefs,
	type BgColorProp,
	type GapProps,
	type HeightProps,
	type PaddingProps,
	type RadiusProp,
	type WidthProps,
} from '@/shared/lib/utilities-props';
import styles from './popup.module.scss';

export function Popup(props: Popup.Props) {
	const { children, className, anchorWidth, minAnchorWidth = true, ...otherProps } = extractProps(
		props,
		radiusPropDef,
		paddingPropDefs,
		bgColorPropDef,
		gapPropDefs,
		heightPropDefs,
		widthPropDefs
	);

	return (
		<div
			className={classNames(
				styles['popup'],
				{
					[styles['anchor-width']]: anchorWidth,
					[styles['min-anchor-width']]: minAnchorWidth,
				},
				className
			)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export namespace Popup {
	export interface Props extends PaddingProps, RadiusProp, BgColorProp, WidthProps, HeightProps, GapProps {
		children?: React.ReactNode;
		className?: string;
		anchorWidth?: boolean;
		minAnchorWidth?: boolean;
	}
}
