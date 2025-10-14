import classNames from 'classnames';
import { BaseDialog } from '../../base';
import styles from './dialog-popup.module.scss';
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

export function DialogPopup(props: DialogPopup.Props) {
	const { bgColor = 'grey-2', p = '5', radius = '4', fullScreen, width = '600px' } = props;

	const { children, className, ...otherProps } = extractProps(
		{ ...props, bgColor, p, radius, width },
		radiusPropDef,
		paddingPropDefs,
		bgColorPropDef,
		heightPropDefs,
		widthPropDefs
	);

	return (
		<BaseDialog.Popup
			className={classNames(
				styles['popup'],
				{ [styles['full-screen']]: fullScreen },
				className
			)}
			{...otherProps}
		>
			{children}
		</BaseDialog.Popup>
	);
}

export namespace DialogPopup {
	export interface Props
		extends Omit<BaseDialog.Popup.Props, 'className'>,
			PaddingProps,
			RadiusProp,
			BgColorProp,
			WidthProps,
			HeightProps {
		className?: string;
		fullScreen?: boolean;
	}
}
