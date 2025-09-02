import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],   // array key required in new version
    queryFn: fetchPosts,    // function to fetch posts
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={refetch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (   // show first 10 posts
        <div key={post.id} className="border p-4 mb-2 rounded shadow">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
