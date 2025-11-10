import React from "react";
import { HStack, Button, Link } from "@chakra-ui/react";

type NavItem = {
  label: string;
  href: string;
};

type NavigatorProps = {
  items: NavItem[];
  /**
   * Optional callback that is called when an item is clicked.
   * If omitted the component will perform a full navigation by setting window.location.href.
   */
  onNavigate?: (href: string) => void;
};

export const Navigator: React.FC<NavigatorProps> = ({ items, onNavigate }) => {
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
    else window.location.href = href;
  };

  return (
    <HStack gap={3} as="nav">
      {items.map((it) => (
        <Link key={it.href} href={it.href} onClick={(e) => handleClick(e, it.href)}>
          <Button variant="ghost">{it.label}</Button>
        </Link>
      ))}
    </HStack>
  );
};

export default Navigator;
