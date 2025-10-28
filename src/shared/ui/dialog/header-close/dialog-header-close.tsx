import { Icon } from '../../icons';
import { BaseDialog } from '../../base/dialog';
import { Button } from '../../button';
import styles from './dialog-header-close.module.scss';

export function DialogHeaderClose() {
	return (
		<BaseDialog.Close
			render={
				<Button
                    className={styles['close-button']}
					radius="circular"
					color="secondary-soft"
					variant="clear"
					iconButton
					autoFontSize
				/>
			}
		>
			<Icon.X />
		</BaseDialog.Close>
	);
}
