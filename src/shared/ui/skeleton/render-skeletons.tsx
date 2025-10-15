import * as React from 'react';

export function RenderSkeletons(props: RenderSkeletons.Props) {
	const { children, count, min, max } = props;

	const countWithRange = (min && max) ? Math.max(min, Math.min(count, max)) : count;

	return Array.from({ length: countWithRange }, (_, index) => (
		<React.Fragment key={index}>{children}</React.Fragment>
	));
}

export namespace RenderSkeletons {
	export interface Props {
		children: React.ReactElement;
		count: number;
		min?: number;
		max?: number;
	}
}
