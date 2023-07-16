import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "@/lib/mdx"
import MDXComponents from "@/components/MDXComponents";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";


export default function Post({source, frontmatter}){
    return (
        <div className="container pt-36">
             <Link href='/' className='button button--flex mt-4 button-hello mb-4'>
           
            <span className='pr-4'> 
                <IoIosArrowRoundBack />
                </span>
                Atras 
        </Link>
        <MDXRemote {...source} components={MDXComponents}/>

        </div>
    )
}

export async function getStaticProps({params}) {
    const {source, frontmatter} = await getFileBySlug(params.slug);
    return {
        props: {source, frontmatter},
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, "")
        },
    }))

    return {
        paths,
        fallback: false
    }
}