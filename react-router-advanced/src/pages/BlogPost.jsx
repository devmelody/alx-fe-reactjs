import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-lg font-bold">Blog Post #{id}</h2>
      <p>This is the content of blog post {id}.</p>
    </div>
  );
}
