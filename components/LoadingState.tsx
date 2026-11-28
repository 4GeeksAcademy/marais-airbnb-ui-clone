export const LoadingState = ({ label }: { label: string }) => (
  <div role="status" className="flex min-h-48 flex-col items-center justify-center gap-3 text-sm text-[#63756a]"><span className="size-8 animate-spin rounded-full border-2 border-[#dce4da] border-t-[#245448]" /><span>{label}</span></div>
);
