type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-800 bg-black/80 p-4 backdrop-blur-md">
      <h1 className="ml-5 text-md font-bold text-white">{title}</h1>
    </div>
  );
};
