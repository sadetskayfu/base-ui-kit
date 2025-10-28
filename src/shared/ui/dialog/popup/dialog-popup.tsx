import classNames from 'classnames';
import { BaseDialog } from '../../base/dialog';
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
import { Backdrop } from '../../_backdrop';
import styles from './dialog-popup.module.scss';

export function DialogPopup(props: DialogPopup.Props) {
	const {
		portalTarget,
		backdrop,
		bgColor = 'grey-2',
		p = '4',
		radius = '5',
		side,
		fullScreen,
		width = '600px',
	} = props;

	const { children, className, ...otherProps } = extractProps(
		{ ...props, bgColor, p, radius, width },
		radiusPropDef,
		paddingPropDefs,
		bgColorPropDef,
		heightPropDefs,
		widthPropDefs
	);

	return (
		<BaseDialog.Portal container={portalTarget}>
			{backdrop && <BaseDialog.Backdrop render={<Backdrop transitionDuration={300} />} />}
			<BaseDialog.Popup
				className={classNames(
					styles['popup'],
					side && styles[`side-${side}`],
					{ [styles['full-screen']]: fullScreen },
					className
				)}
				{...otherProps}
			>
				{children}
			</BaseDialog.Popup>
		</BaseDialog.Portal>
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
		side?: 'left' | 'right';
		portalTarget?: BaseDialog.Portal.Props['container'];
		backdrop?: boolean;
	}
}
