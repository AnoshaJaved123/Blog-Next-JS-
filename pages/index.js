import Head from 'next/head'
// import Link from 'next/link'
// import img2 from '../public/img2.jpg'
import blogimg from '../public/blogimg.jpg'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="Anosha app, new app, first app" />
      </Head>
      <style jsx>
      {`
      .heading{
        color: orange;
      }
      `}
      </style>


     
     
      
      <main className={styles.main}>
        <h1 className={styles.title}>
        First Blog 
        </h1>

        <span className='heading'>
        <p className={styles.description}>

          Welcome to First Project in Next JS
        </p>
        </span>
        {/* <img className={styles.imagemain} src={blogimg} height={340} width={1300} alt='myimag' /> */}
        <img className={styles.imagemain} src="/blogimg.jpg" width={1300} height={340} alt="myimag" />

        <h2> Blog Post</h2>

        <div className="blogname">
        <h3>How to learn Science</h3>
        <p>
          This is my First Blog Page. Every thing here is just for practice nothing else. I want to learn next js so i use this to practice
        </p>
        </div>
        <div className="blogname">
        <h3>How to learn Science</h3>
        <p>
          This is my First Blog Page. Every thing here is just for practice nothing else. I want to learn next js so i use this to practice
        </p>
        </div>
        <div className="blogname">
        <h3>How to learn Science</h3>
        <p>
          This is my First Blog Page. Every thing here is just for practice nothing else. I want to learn next js so i use this to practice
        </p>
        </div>
       

       
      </main>
      

    </div>
  )
}
