import classNames from 'classnames';
import { InfoBadge } from '../info-badge';
import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import styles from './badge.module.scss';

export function Badge(props: Badge.Props) {
	const {
		children,
		className,
		content,
		max,
		position = 'top-right',
		overlap = 'circular',
		size = '2',
		color,
		borderColor,
		visible,
	} = extractProps(props, marginPropDefs);

	return (
		<div className={classNames(styles['badge-container'], className)}>
			{children}
			<InfoBadge
				max={max}
				color={color}
				className={classNames(
					styles['badge'],
					styles[`position-${position}`],
					styles[`overlap-${overlap}`],
					styles[`size-${size}`],
					{
						[styles[`border-color-${borderColor}`]]: borderColor,
						[styles['visible']]: visible || content,
					}
				)}
			>
				{content}
			</InfoBadge>
		</div>
	);
}

export namespace Badge {
	export interface Props extends MarginProps, Pick<InfoBadge.Props, 'max' | 'color'> {
		className?: string;
		children?: React.ReactNode;
		content?: number | string;
		/**
		 * @default 'top-right'
		 */
		position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
		/**
		 * @default 'circular'
		 */
		overlap?: 'circular' | 'square';
		visible?: boolean;
		borderColor?: 'grey-1' | 'grey-2' | 'grey-3';
		size?: '1' | '2';
	}
}
