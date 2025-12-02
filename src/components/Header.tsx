"use client";

import { useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/reducers/auth.reducer";
import Link from "next/link";

const Header = () => {
  const { user } = useAppSelector(selectAuth);

  return (
    <div>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Header;
