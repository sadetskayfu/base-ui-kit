import classNames from 'classnames';
import { BaseTabs } from '../../base';
import { useTabsContext } from '../provider/tabs-context';
import { extractProps, radiusPropDef } from '@/shared/lib/utilities-props';
import styles from './tabs-indicator.module.scss';

export function TabsIndicator() {
	const context = useTabsContext();

	const radius = context?.radius || undefined;

	const { className } = extractProps({ radius }, radiusPropDef);

	return <BaseTabs.Indicator className={classNames(styles['indicator'], className)} />;
}
