import classNames from 'classnames';
import {
	bgColorPropDef,
	extractProps,
	heightPropDefs,
	paddingPropDefs,
	radiusPropDef,
	widthPropDefs,
	type BgColorProp,
	type HeightProps,
	type PaddingProps,
	type RadiusProp,
	type WidthProps,
} from '@/shared/lib/utilities-props';
import { BaseTooltip } from '../../base/tooltip';
import styles from './tooltip-popup.module.scss';

export function TooltipPopup(props: TooltipPopup.Props) {
	const { children, className, anchorWidth, minAnchorWidth, ...otherProps } = extractProps(
		props,
		radiusPropDef,
		paddingPropDefs,
		bgColorPropDef,
		heightPropDefs,
		widthPropDefs
	);

	return (
		<BaseTooltip.Popup
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
		</BaseTooltip.Popup>
	);
}

export namespace TooltipPopup {
	export interface Props
		extends BaseTooltip.Popup.Props,
			PaddingProps,
			RadiusProp,
			BgColorProp,
			WidthProps,
			HeightProps {
		children?: React.ReactNode;
		className?: string;
		anchorWidth?: boolean;
		minAnchorWidth?: boolean;
	}
}
