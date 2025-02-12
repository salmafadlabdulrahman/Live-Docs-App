"use client";

import LexicalEditor from "./LexicalEditor";
import { useDoc } from "../context/DocContext";
import Invite from "./Invite";

const NewDoc = () => {
  const { shareDoc, setShareDoc, deleteDoc, setDeleteDoc } = useDoc();
  const closeInvite = () => setShareDoc(false);
  const deleteDocFunc = () => setDeleteDoc(false);

  return (
    <div>
      <LexicalEditor />
      {shareDoc && (
        <div onClick={closeInvite} className="blurry-container">
          <div className="centered-blurry-container">
            {" "}
            <Invite />
          </div>
        </div>
      )}

      {deleteDoc && (
        <div onClick={deleteDocFunc} className="blurry-container">
          <div className="centered-blurry-container">
            {" "}
            delete doc
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDoc;
