"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "All Features",
    href: "/docs/primitives/all-features",
    description:
      "A comprehensive overview of all available features in the application.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">All Features</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  title={component.title}
                  href={component.href}
          //           className={
          //   index === 6
          //     ? "border-t pt-2 mt-2 border-muted/500"
          //     : ""
          // }
          className="!important dark:hover:bg-gray-800"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">Discoverd</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
            <ul className="w-80 grid grid-cols-2 gap-2">
              <ListItem href="/docs" title="Find Partners">
                Match with compatible language partners 
              </ListItem>
              <ListItem href="/docs/installation" title="Moments">
               Share your language journey
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Topics">
            Explore tranding topics and discussions
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">About Hello Talk</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
