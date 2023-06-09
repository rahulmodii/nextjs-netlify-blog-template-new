import { type } from "os";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags } from "../lib/tags";
import { GetStaticProps } from "next";

type Props = {
  posts: PostContent[];
};

export default function Index({ posts }: Props) {
  return (
    <Layout posts={posts}>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container" style={{padding: "80px 36px 80px 80px"}}>
        <div>
          <h1>
            Mark WYSIWYG editor spike<span className="fancy">.</span>
          </h1>
          {/* <span className="handle">@nextjs-netlify-blog</span> */}
          <h2>Lorem ipsum dolor sit amet.</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 100);
  return {
    props: {
      posts,
    },
  };
};
