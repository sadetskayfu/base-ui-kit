import classNames from 'classnames';
import { Icon } from '@/shared/ui/components/icons';

export function ComboboxIcon({ className }: { className?: string }) {
	return <Icon.ChevronsUpDown className={classNames('ml-auto', className)} />;
}
