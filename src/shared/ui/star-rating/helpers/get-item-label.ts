export function getItemLabel(value: number) {
	if (value === 0.5) {
		return `${value} звезды`;
	}
	if (value >= 1 && value < 2) {
		return `${value} звезда`;
	}
	if (value >= 2 && value < 5) {
		return `${value} звезды`;
	}

	if (value >= 5) {
		return `${value} звезд`;
	}
    
    return ''
}
