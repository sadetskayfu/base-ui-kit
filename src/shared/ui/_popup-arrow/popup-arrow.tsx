import styles from './popup-arrow.module.scss';

export function PopupArrow(props: React.ComponentProps<'span'>) {
	return (
		<span className={styles['arrow']} {...props} />
	);
};
