import { UiContainer, UiHeader, UiLogo, UiNav } from '@/shared/ui';
import { UiToaster } from '@/shared/ui/ui-toaster';
import { LayoutWrapper } from '@/widgets/layouts/private-layout/ui/layout-wrapper';

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <UiHeader left={<UiLogo />} navBar={<UiNav />} right={<div>right</div>} />
      <UiContainer>{children}</UiContainer>
      <UiToaster />
    </LayoutWrapper>
  );
}
