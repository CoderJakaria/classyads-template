import React from "react";
import OurBlogsCard from "../OurBlogsCard/OurBlogsCard";

const OurBlogsCards = () => {
  return (
    <div className="row mb-4">
      <OurBlogsCard imageURL="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <OurBlogsCard imageURL="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <OurBlogsCard imageURL="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </div>
  );
};

export default OurBlogsCards;
