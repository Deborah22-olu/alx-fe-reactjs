import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>

        <button
          onClick={() => setShowPosts(!showPosts)}
          className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
        >
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
