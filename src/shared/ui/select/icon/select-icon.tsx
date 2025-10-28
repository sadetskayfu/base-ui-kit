import classNames from 'classnames';
import { Icon } from '../../icons';

export function SelectIcon({ className }: { className?: string }) {
	return <Icon.ChevronDown className={classNames('ml-auto', className)} />;
}
