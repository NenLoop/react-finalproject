import { useState } from "react";

import Posts from "../../components/common/Posts.jsx";
import CreatePost from "./CreatePost.jsx";

const HomePage = () => {
	const feedType = "Post"

	return (
		<>
			<div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
				{/* Header */}
				<div className='flex w-full border-b border-gray-700'>
					<div
						className={
							"flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
						}
						onClick={() => setFeedType("forYou")}
					>
						Posts
						{feedType === "Post" && (
							<div className='absolute bottom-0 w-16  h-1 rounded-full bg-primary'></div>
						)}
					</div>
				</div>

				{/*  CREATE POST INPUT */}
				<CreatePost />

				{/* POSTS */}
				<Posts />
			</div>
		</>
	);
};
export default HomePage;