import classNames from 'classnames';
import { BaseTabs } from '../../base/tabs';
import {
	bgColorPropDef,
	extractProps,
	paddingPropDefs,
	radiusPropDef,
	type BgColorProp,
	type PaddingProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './tabs-panel.module.scss';

export function TabsPanel(props: TabsPanel.Props) {
	const { className, ...otherProps } = extractProps(
		props,
		paddingPropDefs,
		radiusPropDef,
		bgColorPropDef
	);

	return <BaseTabs.Panel className={classNames(styles['panel'], className)} {...otherProps} />;
}

export namespace TabsPanel {
	export interface Props
		extends Omit<BaseTabs.Panel.Props, 'className'>,
			PaddingProps,
			RadiusProp,
			BgColorProp {
		className?: string;
	}
}
