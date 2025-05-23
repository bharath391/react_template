import Bottom from "./ui/bottom";
export default function Content(): React.ReactNode {
  return (
    <div className="relative w-full min-h-[500px] overflow-hidden scrollbar-hide">
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        data-placeholder="Start typing your notes here..."
        className="relative w-full border-t-1 p-6 text-base leading-relaxed outline-none focus:outline-none bg-transparent overflow-auto scrollbar-hide placeholder-div"
      />
      {/* Floating bottom bar */}
      <div className="fixed right-4 bottom-4 z-50   ">
        <Bottom />
      </div>
    </div>
  );
}
