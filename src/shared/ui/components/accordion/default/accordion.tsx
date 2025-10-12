import classNames from 'classnames';
import { Icon } from '@/shared/ui/components/icons';
import { BaseAccordion } from '../base';
import styles from './accordion.module.scss';

export function Accordion(props: Accordion.Props) {
	const {
		children,
		className,
		title,
		titleTag: TitleTag = 'h2',
		size = '3',
		...otherProps
	} = props;

	return (
		<BaseAccordion.Item
			className={classNames(styles['accordion'], styles[`size-${size}`], className)}
			{...otherProps}
		>
			<BaseAccordion.Header className={styles['header']} render={<TitleTag />}>
				<BaseAccordion.Trigger className={styles['trigger']}>
					<Icon.Plus className={styles['indicator']} />
					{title}
				</BaseAccordion.Trigger>
			</BaseAccordion.Header>
			<BaseAccordion.Panel hiddenUntilFound className={styles['panel']}>
				<div className={styles['content']}>{children}</div>
				<span className={styles['corner']} />
			</BaseAccordion.Panel>
		</BaseAccordion.Item>
	);
}

export namespace Accordion {
	export interface Props extends Omit<BaseAccordion.Item.Props, 'title' | 'className'> {
		className?: string;
		children?: React.ReactNode;
		title: React.ReactNode;
		titleTag?: keyof React.JSX.IntrinsicElements;
		size?: '1' | '2' | '3';
	}
}
