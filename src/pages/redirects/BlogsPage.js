function BlogsPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const blog = queryParameters.get("blog");
  window.location.href =
    "https://lolclubwit.hashnode.dev/" + (blog === null ? "" : blog);
}

export default BlogsPage;
