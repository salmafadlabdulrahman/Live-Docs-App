import { faArrowTrendUp, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentSection = () => {
  return (
    <div className="bg-dark-200 min-h-[230px] rounded-lg p-4 md:w-[40%] lg:w-full flex flex-col">
      <textarea
        placeholder="Write a comment..."
        className="w-full h-[85%] bg-transparent outline-none flex-grow "
      ></textarea>
      <div className="flex items-center justify-between">
        <FontAwesomeIcon icon={faAt} className="" />
        <div className="comment-thread-section-btn">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-white " />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
