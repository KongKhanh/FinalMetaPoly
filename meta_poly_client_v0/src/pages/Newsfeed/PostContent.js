import { useState } from 'react';

import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import ShowComments from './ShowComments';

function PostContent(props) {

  const [CommentList, setCommentList] = useState(
      (
        function(){
            return props.PostItem ? props.PostItem.comment_list : undefined;
        }()
      )
  );

  const [x, setX] = useState([]);

  // return (

  // )
}
export default PostContent;