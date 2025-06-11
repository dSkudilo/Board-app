export function UiContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow flex flex-col items-center overflow-hidden">
      <div className=" w-full flex-grow flex flex-col p-4 overflow-hidden">
        {children}
      </div>
    </main>
  );
}
