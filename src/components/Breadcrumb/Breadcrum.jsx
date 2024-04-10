"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrum() {
  const [path, setPath] = useState(usePathname());
  const links = path.split("/");
  links.shift();

  return (
    <div>
      {links.map((linkItem, index) => (
        <span key={`${index}`}>
          <span>/</span>
          <Link href={`/${linkItem}`}>{linkItem}</Link>
        </span>
      ))}
    </div>
  );
}
