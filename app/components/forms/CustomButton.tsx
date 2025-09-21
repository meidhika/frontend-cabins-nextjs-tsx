interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton = ({ label, onClick, className }: CustomButtonProps) => (
  <div
    onClick={onClick}
    className={`py-4 bg-airbnb hover:bg-airbnb-dark text-white font-bold text-center rounded-xl transition cursor-pointer ${className}`}
  >
    {label}
  </div>
);

export default CustomButton;
