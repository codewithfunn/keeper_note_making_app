import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const index = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Privacy",
      link: "/privacy",
    },
    {
      title: "Term and Condition",
      link: "/termAndCondition",
    },
    {
      title: "Features",
      link: "/features",
    },
  ];
  return (
    <footer
      className={`${styles.__footer}   shadow-orange-400 shadow-2xl rounded-t-3xl `}
    >
      <p className={styles.__copyright}>
        Copyright ⓒ 2009-{year} KeeperNotes.com{" "}
      </p>
      <ul className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <li className={styles.link}>{item.title}</li>
            </Link>
          );
        })}
      </ul>
      <div className={styles.__about}>
        <p>
          KeeperNotes is your go-to online notepad for quick and efficient
          note-taking without the need for any login hassles.
        </p>
        <p>With a sleek design and user-friendly interface,</p>
        <p>
          KeeperNotes offers a fast, clean, and easy-to-use experience for all
          your note-keeping needs.
        </p>
      </div>
    </footer>
  );
};

export default index;
