import {
  Users,
  Settings,
  Package,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Store,
  PackageSearch,
  ReceiptText,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Designs",
          icon: SquarePen,
          submenus: [
            {
              href: "/dashboard/designs",
              label: "All Designs",
            },
            {
              href: "/design",
              label: "New Post",
            },
          ],
        },
        {
          href: "/orders",
          label: "Orders",
          icon: Package,
        },
        {
          href: "/product",
          label: "Product Library",
          icon: PackageSearch,
        },
        {
          href: "/store",
          label: "Store",
          icon: Store,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/billing",
          label: "Billing",
          icon: ReceiptText,
        },
        {
          href: "/contact",
          label: "Contact",
          icon: Users,
        },
        {
          href: "/setting",
          label: "Settings",
          icon: Settings,
        },
      ],
    },
  ];
}
