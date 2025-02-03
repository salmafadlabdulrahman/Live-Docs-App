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
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
} from "@lexical/list";
import Image from "next/image";

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="flex items-center justify-between border border-y-2 border-dark-200 ">
      <div className="flex items-center gap-6 p-5 flex-wrap">
        <button onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}>
          <FontAwesomeIcon icon={faArrowLeft} className="toolbar-icons" />{" "}
        </button>
        <button onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}>
          <FontAwesomeIcon icon={faArrowRight} className="toolbar-icons" />
        </button>
        <button
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        >
          <FontAwesomeIcon icon={faBold} className="toolbar-icons" />
        </button>
        <button
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        >
          <FontAwesomeIcon icon={faItalic} className="toolbar-icons" />
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
          }
        > {/*not working */}
          <FontAwesomeIcon icon={faUnderline} className="toolbar-icons" />
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
          }
        > {/*not working */}
          <FontAwesomeIcon icon={faStrikethrough} className="toolbar-icons" />
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
          }
        > {/*not working */}
          <FontAwesomeIcon icon={faList} className="toolbar-icons" />
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
          }
        > {/*not working */}
          <FontAwesomeIcon icon={faListOl} className="toolbar-icons" />
        </button>

        <button
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}
        >
          <FontAwesomeIcon icon={faAlignLeft} className="toolbar-icons" />
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
          }
        >
          <FontAwesomeIcon icon={faAlignCenter} className="toolbar-icons" />
        </button>

        <button
          onClick={() =>
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")
          }
        >
          <FontAwesomeIcon icon={faAlignRight} className="toolbar-icons" />
        </button>
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
  );
};

export default Toolbar;
