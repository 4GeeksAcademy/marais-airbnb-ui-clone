export const EmptyState = ({ title, message }: { title: string; message: string }) => (
  <div className="rounded-2xl border border-dashed border-[#cfd8ce] bg-white/60 px-6 py-12 text-center"><h3 className="font-serif text-xl text-[#30473b]">{title}</h3><p className="mt-2 text-sm text-[#829087]">{message}</p></div>
);
