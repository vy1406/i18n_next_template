"use client";

import { languageOptions } from "@/constants/LanguageOptions";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LanguageDropdown = ({
  isOpen,
  onSelect,
}: {
  isOpen: boolean;
  onSelect: (path: string) => void;
}) => (
  <div className={`dropdown ${isOpen ? "dropdown-open" : ""}`}>
    {isOpen &&
      languageOptions.map((option) => (
        <button
          key={option.path}
          className="language-button"
          onClick={() => onSelect(option.path)}
        >
          {option.name}
        </button>
      ))}
  </div>
);

const LocalSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLanguageChange = (langPath: string) => {
    const pathParts = pathname.split("/");
    const newPath = `/${langPath}/${pathParts.slice(2).join("/")}`;
    router.push(newPath);
    setIsDropdownOpen(false);
  };

  return (
    <div className="header-languages" ref={dropdownRef}>
      <button
        className={`dropdown-toggle ${isDropdownOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        Languages
      </button>
      <LanguageDropdown isOpen={isDropdownOpen} onSelect={handleLanguageChange} />
    </div>
  );
};

export default LocalSwitcher;