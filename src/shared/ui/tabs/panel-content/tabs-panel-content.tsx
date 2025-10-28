import classNames from 'classnames';
import { useRenderElement } from '@/shared/hooks';
import { useTabsRootContext } from '../root/tabs-root-context';
import styles from './tabs-panel-content.module.scss';

export function TabsPanelContent(props: TabsPanelContent.Props) {
	const { render, className, ...otherProps } = props;

	const { panelPosition } = useTabsRootContext();

	return useRenderElement('div', {
		render,
		props: [
			{
				className: classNames(
					styles['panel-content'],
					styles[`panel-position-${panelPosition}`],
					className
				),
			},
			otherProps,
		],
	});
}

export namespace TabsPanelContent {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State> {}
}
