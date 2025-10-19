import classNames from 'classnames';
import {
	extractProps,
	heightPropDefs,
	marginPropDefs,
	radiusPropDef,
	widthPropDefs,
	type HeightProps,
	type MarginProps,
	type RadiusProp,
	type WidthProps,
} from '@/shared/lib/utilities-props';
import styles from './skeleton.module.scss';

export function Skeleton(props: Skeleton.Props) {
	const { className, textSize, boxSize, ...otherProps } = extractProps(
		props,
		radiusPropDef,
		marginPropDefs,
		widthPropDefs,
		heightPropDefs
	);

	return (
		<span
			className={classNames(
				styles['skeleton'],
				textSize && styles[`text-size-${textSize}`],
				boxSize && styles[`box-size-${boxSize}`],
				className
			)}
			{...otherProps}
		/>
	);
}

export namespace Skeleton {
	export interface Props
		extends React.ComponentProps<'span'>,
			RadiusProp,
			MarginProps,
			WidthProps,
			HeightProps {
		textSize?: '1' | '2' | '3' | '4' | '5';
		boxSize?: '1' | '2' | '3' | '4'
	}
}
