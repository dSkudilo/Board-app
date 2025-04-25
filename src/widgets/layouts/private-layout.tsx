import { UiContainer, UiHeader, UiLogo, UiNav } from '@/shared/ui';

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader left={<UiLogo />} navBar={<UiNav />} right={<div>right</div>} />
      <UiContainer>{children}</UiContainer>
    </div>
  );
}
