"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import Toolbar from "./Toolbar";
import CommentSection from "./CommentSection";
import ThreadSection from "./ThreadSection";

const theme = {
  // Theme styling goes here
  //...
};

function onError(error: any) {
  console.error(error);
}

export default function LexicalEditor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <div className="flex flex-col lg:flex-row mt-[2em] lg:gap-5 ">
        <RichTextPlugin
          placeholder={
            <div className="absolute pt-[1em] left-[70px] text-gray-400 ">
              Enter some text...
            </div>
          }
          contentEditable={
            <ContentEditable className="h-screen w-[90%] lg:w-[80%] xl:w-full m-auto bg-dark-200 outline-none rounded-md  lg:ml-[3em] p-2 lg:mt-0" />
          }
          ErrorBoundary={LexicalErrorBoundary}
        /> {/*lg:w-[50%] */}

        <div className="w-[90%] m-auto mt-[2em] lg:w-[40%] lg:mr-[2em] lg:mt-0 md:flex md:justify-between lg:flex-col lg:justify-normal mb-[2em] ">
          <CommentSection />
          <ThreadSection />
        </div>
      </div>

      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}