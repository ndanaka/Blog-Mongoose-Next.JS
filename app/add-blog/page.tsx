/**
 * @desc Blog adding page
 * @createdBy Midas
 * @createdAt 08/04/2024
 * @updatedAt 08/04/2024
 */

"use client";

import { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
};

const AddBlog = () => {
  // define states
  const [blogFormData, setBlogFormData] = useState(initialFormData);

  return (
    <div className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg mb-5">Add a new blog</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label>Enter blog title</label>
          <input
            className="border border-red-500 p-3 outline-none"
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={blogFormData["title"]}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Enter blog description</label>
          <textarea
            rows={5}
            className="border border-red-500 p-3 outline-none"
            name="description"
            placeholder="Enter blog description"
            value={blogFormData["description"]}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                description: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button className="border boder-red-500 p-4 bg-black text-white">
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
