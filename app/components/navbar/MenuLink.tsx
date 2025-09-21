"use client";
interface MenuLinkProps {
  label?: string;
  onClick: () => void;
}
const MenuLink = ({ label, onClick }: MenuLinkProps) => {
  return (
    <div
      className="px-5 py-4 hover:bg-gray-100 transition cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuLink;
