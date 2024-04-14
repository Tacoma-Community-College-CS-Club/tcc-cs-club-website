export const prerender = false;

export const load = ({ params }) => {
    const pages = import.meta.glob("../../projects/*.{md,mdx}");
    console.log({pages})

	return {
		pages: [
			{ slug: 'hello-world', title: 'Example project' },
			{ slug: 'awesome-app', title: 'Android App' },
			{ slug: 'game-project', title: 'Game Project' },
		]
	};
}

/*
export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: publishedPosts };
};
*/