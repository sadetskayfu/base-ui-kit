export type Breakpoint = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const breakpoints: Record<Breakpoint, number> = {
    initial: 0,
	xs: 520,
	sm: 768,
	md: 1024,
	lg: 1280,
	xl: 1640,
};
