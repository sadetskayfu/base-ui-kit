type GroupType = 'search' | 'history' | 'popular';

export type Item = {
	value: string;
	group: GroupType;
};
export type ItemGroup = {
	value: GroupType;
	items: Item[];
};

export function groupItemsByType(items: Item[]): ItemGroup[] {
	const groups: { [key: string]: Item[] } = {};

	items.forEach(option => {
		(groups[option.group] ??= []).push(option);
	});

	const order: GroupType[] = ['history', 'search', 'popular'];

	return order.map(value => ({ value, items: groups[value] ?? [] }));
}

export function getGroupLabel(groupValue: GroupType) {
	if (groupValue === 'popular') {
		return 'Часто ищут';
	} else if (groupValue === 'history') {
		return 'Вы искали';
	} else if (groupValue === 'search') {
		return 'F';
	}
	return '';
}
