import Image from "next/image";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight,
  faBold,
  faItalic,
  faList,
  faListOl,
  faStrikethrough,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const tools = [
  {
    icon: faArrowLeft,
    action: (editor: any) => editor.chain().focus().undo().run(),
  },
  {
    icon: faArrowRight,
    action: (editor: any) => editor.chain().focus().redo().run(),
  },
  {
    icon: faBold,
    action: (editor: any) => editor.chain().focus().toggleBold().run(),
  },
  {
    icon: faItalic,
    action: (editor: any) => editor.chain().focus().toggleItalic().run(),
  },
  {
    icon: faUnderline,
    action: (editor: any) =>
      console.log("Underline not built-in. Extend TipTap"),
  },
  {
    icon: faStrikethrough,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
  {
    icon: faList,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
  {
    icon: faListOl,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
  {
    icon: faAlignLeft,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
  {
    icon: faAlignCenter,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
  {
    icon: faAlignRight,
    action: (editor: any) => editor.chain().focus().toggleStrike().run(),
  },
];

const Toolbar = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  }); //content: '<p>Start typing here...</p>',
  return (
    <div className="">
      <div className="flex items-center justify-between border border-y-2 border-dark-200 p-3 ">
        <div className="flex">
          {tools.map((tool, i) => (
            <div key={i}>
              <button onClick={() => tool.action(editor)} className=" p-2">
                <FontAwesomeIcon icon={tool.icon} />
              </button>
            </div>
          ))}
        </div>

        <div className=" w-[35px] max-w-[50px] sm:w-[40px] cursor-pointer pr-1">
          <Image
            src={"/assets/icons/delete.svg"}
            alt="delete icon"
            width={25}
            height={25}
            unoptimized
            className=" sm:pr-4 w-full object-cover"
          />
        </div>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default Toolbar;