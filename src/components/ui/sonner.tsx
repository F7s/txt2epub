import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light"}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      position="bottom-right"
      offset={16}
      visibleToasts={3}
      expand={false}
      gap={12}
      toastOptions={{
        className: "!max-w-[calc(100vw-2rem)] md:!max-w-md",
        style: {
          marginBottom: "env(safe-area-inset-bottom, 0)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
