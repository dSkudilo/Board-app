import {UiHeader} from "@/shared/ui";

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader
        left={<div>left</div>}
        navBar={<div>navbar</div>}
        right={<div>right</div>}
      />
      <main className="grow flex flex-col">{children}</main>
    </div>
  )
}