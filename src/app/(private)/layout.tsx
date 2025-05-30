import React from 'react';
import { PrivateLayout } from '@/widgets/layouts';

export default function PrivateGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivateLayout>{children}</PrivateLayout>;
}
