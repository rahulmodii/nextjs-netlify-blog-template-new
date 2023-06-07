import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
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
                <a  target="_self"
                    className="c-sidebar__item-label c-sidebar__item-label--first-level">
                  About
                </a>
              </Link>
            </div>
          </li>
          <li className="c-sidebar__item">
            <div
              className="c-sidebar__item-label-wrap"
              data-testid="label-wrap"
            >
              <Link href="/posts">
                <a
                  target="_self"
                  className="c-sidebar__item-label c-sidebar__item-label--first-level"
                >
                  Blog
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
