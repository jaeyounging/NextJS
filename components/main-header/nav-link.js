"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname(); // NextJS 훅을 이용한 활동 경로 파악 - 도메인 다음 부분에 경로를 반환

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}
    >
      {children}
    </Link>
  );
}
