import { UiContainer, UiHeader, UiLogo, UiNav } from '@/shared/ui';
import { UiToaster } from '@/shared/ui/ui-toaster';

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <UiHeader left={<UiLogo />} navBar={<UiNav />} right={<div>right</div>} />
      <UiContainer>{children}</UiContainer>
      <UiToaster />
    </div>
  );
}
