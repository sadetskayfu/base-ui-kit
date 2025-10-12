import classNames from 'classnames';
import { Icon } from '@/shared/ui/components/icons';

export function MenuIcon({ className }: { className?: string }) {
	return <Icon.ChevronDown className={classNames('ml-auto', className)} />;
}
