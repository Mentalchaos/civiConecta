import { counter } from './helpers.js';
import Tag from './Tag';
import './tag.css';

const TagList = ({ tags }) => {
  return (
    <div className="tag">
      {tags.map((tag, index) => <Tag key={counter.next}>{tag}</Tag>)}
    </div>
  );
};

export default TagList;
