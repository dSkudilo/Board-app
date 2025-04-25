export function UiContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow flex flex-col items-center">
      <div className="max-w-[1200px] w-full grow flex flex-col p-4">
        {children}
      </div>
    </main>
  );
}
