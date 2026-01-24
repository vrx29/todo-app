type NoteCard = {
  title: string;
  onClick: () => void;
  description: string;
  createdAt: number;
};

export default function NoteCard(props: NoteCard) {
  return (
    <div className="h-[100px] m-4 p-4 border border-gray-200 rounded-lg bg-white cursor-pointer" onClick={props.onClick}>
      <p className="text-lg font-semibold text-gray-900">{props.title}</p>

      <p className="mt-4 text-sm text-gray-500 truncate">{props.description}</p>
    </div>
  );
}
