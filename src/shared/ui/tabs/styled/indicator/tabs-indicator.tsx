import classNames from 'classnames';
import { BaseTabs } from '../../base';
import { extractProps, radiusPropDef, type RadiusProp } from '@/shared/lib/utilities-props';
import styles from './tabs-indicator.module.scss';

export function TabsIndicator({ radius = '3' }: TabsIndicator.Props) {
	const { className } = extractProps({ radius }, radiusPropDef);

	return <BaseTabs.Indicator className={classNames(styles['indicator'], className)} />;
}

export namespace TabsIndicator {
	export interface Props extends RadiusProp {}
}
