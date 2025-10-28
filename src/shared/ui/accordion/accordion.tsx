import classNames from 'classnames';
import { Icon } from '../icons';
import { BaseAccordion } from '../base/accordion';
import { extractProps, type RadiusProp, radiusPropDef } from '@/shared/lib/utilities-props';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import styles from './accordion.module.scss';

export function Accordion(props: Accordion.Props) {
	const {
		children,
		className,
		title,
		titleTag: TitleTag = 'h2',
		size = '3',
		...otherProps
	} = extractProps(props, radiusPropDef);

	const { containerRef, ripples, removeRipple, ...rippleHandlers } = useRipple();

	return (
		<BaseAccordion.Item
			className={classNames(styles['accordion'], styles[`size-${size}`], className)}
			{...otherProps}
		>
			<BaseAccordion.Header className={styles['header']} render={<TitleTag />}>
				<BaseAccordion.Trigger className={styles['trigger']} {...rippleHandlers}>
					<Icon.Plus className={styles['indicator']} />
					{title}
					<Ripple ref={containerRef} ripples={ripples} removeRipple={removeRipple} />
				</BaseAccordion.Trigger>
			</BaseAccordion.Header>
			<BaseAccordion.Panel className={styles['panel']}>
				<div className={styles['content']}>{children}</div>
			</BaseAccordion.Panel>
		</BaseAccordion.Item>
	);
}

export namespace Accordion {
	export interface Props
		extends Omit<BaseAccordion.Item.Props, 'className' | 'title'>,
			RadiusProp {
		className?: string;
		title: string;
		titleTag?: keyof React.JSX.IntrinsicElements;
		size?: '1' | '2' | '3';
	}
}
