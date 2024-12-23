import Post from "./Post";
import PostSkeleton from "../skeleton/PostSkeleton";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {

	const {data: posts, isLoading} = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/posts/all");
				const data = await res.json();

				if(!res.ok) {
					throw new Error(data.error ||  "Error in fetching posts");
				}
				return data;
				
			} catch (error) {
				throw error;
			}
		}
	});

	return (
		<>
			{isLoading && (
				<div className='flex flex-col justify-center'>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</div>
			)}
			{!isLoading && posts?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{!isLoading && posts && (
				<div>
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			)}
		</>
	);
};
export default Posts;