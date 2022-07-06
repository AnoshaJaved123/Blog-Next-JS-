import React,{useState} from 'react';
import styles from '../../styles/Blog.module.css'
import * as fs from 'fs';



const Slug = (props) => {
 
    const [blog, setBlog] = useState(props.myBlog);
    function createMarkup(c) {
        return {__html: c};
      }
    return( <>
        <div className={styles.container}>
          <main className={styles.blogpagemain}>
  
          <h1>{blog && blog.name}</h1>
            <hr />
            <div>
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.desc)} />}
            </div>
                
        
          </main>
          </div>
   
    </>
  )
  
}


export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: 'JAVASCRIPT'} },
        { params: { slug: 'ANGULAR'} },
        { params: { slug: 'SHOPIFY'} },
        { params: { slug: 'FLASK'} },

      ],
      fallback: true // false or 'blocking'
    };
  }


export async function getStaticProps(context) {

// console.log(context)

        const { slug } = context.params;
      
 let myBlog= await  fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8') 
//  console.log(slug)
    return {
      props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
    }
  }
 
export default Slug;



