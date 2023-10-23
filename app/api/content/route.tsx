const posts = [
  {
    title: "Lorem Ipsum Dolor",
    slug: "lorem-ipsum-dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Ut Enim Ad Minim",
    slug: "ut-enim-ad-minim",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Duis Aute Irure",
    slug: "duis-aute-irure",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Excepteur Sint Occaecat",
    slug: "excepteur-sint-occaecat",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Curabitur Pretium Tincidunt",
    slug: "curabitur-pretium-tincidunt",
    content:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
