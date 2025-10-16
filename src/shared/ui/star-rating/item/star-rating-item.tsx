import classNames from 'classnames';
import { getItemLabel } from '../helpers/get-item-label';
import { useStarRatingRootContext } from '../root/star-rating-root-context';
import { Icon } from '@/shared/ui/icons';
import styles from './star-rating-item.module.scss';

export function StartRatingItem(props: StarRatingItem.Props) {
	const { value, size = '2' } = props;

	const {
		disabled,
		readOnly,
		name,
		precise,
		value: selectedValue,
		setValue,
		hoverValue,
		setHoverValue,
	} = useStarRatingRootContext();

	const halfValue = value - 0.5;

	const visValue = hoverValue ?? selectedValue;

	const fullFilled = value <= visValue;
	const halfFilled = !fullFilled && halfValue <= visValue;

	return (
		<div
			className={classNames(styles['item'], styles[`size-${size}`], {
				['disabled']: disabled,
			})}
		>
			{precise && (
				<input
					type="radio"
					name={name}
					checked={selectedValue === halfValue}
					onChange={() => (readOnly ? undefined : setValue(halfValue))}
					onMouseEnter={() => {
						if (readOnly) {
							return;
						}

						if (!('ontouchstart' in window)) {
							setHoverValue(halfValue);
						}
					}}
					readOnly={readOnly}
					disabled={disabled}
					aria-label={getItemLabel(halfValue)}
				/>
			)}
			<input
				type="radio"
				name={name}
				checked={selectedValue === value}
				onChange={() => (readOnly ? undefined : setValue(value))}
				onMouseEnter={() => {
					if (readOnly) {
						return;
					}

					if (!('ontouchstart' in window)) {
						setHoverValue(value);
					}
				}}
				readOnly={readOnly}
				disabled={disabled}
				aria-label={getItemLabel(value)}
			/>
			<Icon.Star className={styles['star-icon']} />
			<Icon.Star
				clipPath={
					fullFilled
						? 'inset(0 0 0 0)'
						: halfFilled
							? 'inset(0 50% 0 0)'
							: 'inset(0 100% 0 0)'
				}
				className={classNames(styles['star-icon'], styles['filled'])}
			/>
			<span className={styles['focus-indicator']} />
		</div>
	);
}

export namespace StarRatingItem {
	export interface Props {
		value: number;
		size?: '1' | '2';
	}
}
