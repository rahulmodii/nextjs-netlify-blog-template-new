import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import { PostContent } from "../lib/posts";
type Props = {
  posts:PostContent[]
};
export default function Navigation({posts}:Props ) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  // console.log(posts);

  const postNavigation = () => {
    if (posts === undefined) {
      return;
    }
    console.log(posts);
    return posts.map((u, i) => {
      return (
        <li className="c-sidebar__item" key={i} style={{ marginLeft: "7px" }}>
          <div className="c-sidebar__item-label-wrap" data-testid="label-wrap">
            <Link href={`/posts/${u.slug}`}>
              <a target="_self" className="c-sidebar__item-label">
                {u.slug}
              </a>
            </Link>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className="c-sidebar__sticky">
        <ul className="c-sidebar__list">
          <li className="c-sidebar__item">
            <div
              className="c-sidebar__item-label-wrap"
              data-testid="label-wrap"
            >
              <Link href="/">
                <a
                  target="_self"
                  className="c-sidebar__item-label c-sidebar__item-label--first-level"
                >
                  About
                </a>
              </Link>
            </div>
          </li>

          <li className="c-sidebar__item-label c-sidebar__item-label--first-level">
            <div
              className="c-sidebar__item-label-wrap"
              data-testid="label-wrap"
            >
              <Link href="/posts">
                <a
                  target="_self"
                  className="c-sidebar__item-label c-sidebar__item-label--first-level"
                >
                  Posts
                </a>
              </Link>
            </div>
          </li>
          {postNavigation()}
        </ul>
      </div>
    </>
  );
}
