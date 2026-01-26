import { CredentialsIcon } from "./icons/CredentialsIcon";
import { GrowIcon } from "./icons/GrowIcon";
import { HomeIcon } from "./icons/HomeIcon";

interface NavItem {
  icon: React.ComponentType<{ className?: string; active?: boolean }>;
  labelKey: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: HomeIcon, labelKey: "nav.home", href: "/" },
  { icon: GrowIcon, labelKey: "nav.grow", href: "/grow" },
  { icon: CredentialsIcon, labelKey: "nav.credentials", href: "/credentials" },
];

export function BottomNav() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-100 bg-white shadow-2xl">
      <div className="mx-auto flex h-20 max-w-xl items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                isActive ? "text-[#141BEB]" : "text-gray-400"
              }`}
            >
              <item.icon className="h-6 w-6" active={isActive} />
              <span className="text-xs font-medium">{item.labelKey}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
