import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

// Step 1: Collect all the files from the blogdata directory
// Step 2: Iterate through them and Display them

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allblog);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {blogs.map((items) => (
            <>
              <div key={items.name}>
                <Link href={`/Blogpost/${items.slug}`}>
                  <h3 className={styles.blogItemh3}>{items.name}</h3>
                </Link>
                <p className={styles.blogItem}>
                  {items.metadesc.substr(0, 140)}...
                </p>
              </div>
            </>
          ))}
        </main>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  // console.log(data)
  let myfile;
  let allblog = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item)
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allblog.push(JSON.parse(myfile));
  }

  return {
    props: { allblog }, // will be passed to the page component as props
  };
}

export default Blog;
