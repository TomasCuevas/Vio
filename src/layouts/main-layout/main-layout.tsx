interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-stone-900 text-white px-2 py-4">
      {children}
    </div>
  );
};
