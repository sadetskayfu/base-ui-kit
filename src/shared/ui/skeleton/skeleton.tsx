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
	const { className, ...otherProps } = extractProps(
		props,
		radiusPropDef,
		marginPropDefs,
		widthPropDefs,
		heightPropDefs
	);

	return <span className={classNames(styles['skeleton'], className)} {...otherProps} />;
}

export namespace Skeleton {
	export interface Props
		extends React.ComponentProps<'span'>,
			RadiusProp,
			MarginProps,
			WidthProps,
			HeightProps {}
}
