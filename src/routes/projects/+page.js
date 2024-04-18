export const prerender = false;

export const load = async ({ params }) => {
	const pages = import.meta.glob("../../projects/*/*.{md,mdx}");

	const pageList = await Promise.all(Object.entries(pages).map(async ([filepath, module]) => {
		const { metadata } = await module();
		const slug = filepath.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');
		
		return {
			slug,
			...metadata
		};
	}));

	return {
		pages: pageList
	};
}
