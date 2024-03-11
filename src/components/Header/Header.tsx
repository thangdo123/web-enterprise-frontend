import React, { useState } from "react";
import { Menu, MenuProps } from "antd";

const HEADER_LINKS = [
  { name: "Home", path: "/home" },
  { name: "My submissions", path: "/mysubmissions" },
  { name: "Contact", path: "/contact" },
];

const items = HEADER_LINKS.map(({ name, path }) => ({
  label: name,
  key: path,
}));

const groupItems: MenuProps["items"] = items;

export default function Header() {
  const [current, setCurrent] = useState(HEADER_LINKS[0].path);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={groupItems}
        style={{ width: "100%" }}
      />
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={groupItems}
        style={{ width: "100%", justifyContent: "flex-end" }}
      />
    </div>
  );
}
