import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

const Home = () => {
//   const [posts, setPost] = useState([]);
  
//   useEffect(() => {
//     loadPosts();
//   }, []);

//   const loadPosts = async () => {
//     const result = await axios.get("http://localhost:3003/posts");
//     setPost(result.data.reverse());
//   };

   

	return (
		<div className="container">
			 
			<div class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
				  <strong>Welcome!</strong> Hey, Keep Updated!
				  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
				
			  <div className="row mt-6">
			  {/* <h4 className="text-center mt-5" >Latest Post <span class="badge bg-secondary">{posts.length}</span></h4> */}
			  {/* {posts.map((post, index) => (
			    <div className="row mt-4">
			    	<div class="card shadow">
				  <div class="card-header">
				    <span class="badge bg-success">@{post.username}</span>
				  </div>
				  <div class="card-body">
				    <h5 class="card-title">{post.title}</h5>
				    <p class="card-text">{post.description}</p>
				    <a href="#" class="btn btn-primary">Learn More</a>
				  </div>
				  
				</div>
			    </div>

			  ))} */}
			  </div>
			  &nbsp;
		</div>
	);
};

export default Home;