import { Link } from "react-router-dom";
import { useAppDispatch, useAppselector } from "../../store";
import { useEffect } from "react";
import { postsOp } from "../../store/operations";
import { postsSel } from "../../store/Posts/selectors";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const postLists = useAppselector(postsSel.postsSelector)
    console.log(postLists);
    

    useEffect (() => {
        dispatch(postsOp.getPosts())
    } , [dispatch])

  return (
    <div>
        <Link to= '/'>Go Back</Link>

        {postLists.map ( (post) => {
            return (
                <div>
                    <Link to={`${post.id}`}>{post.title}</Link>
                </div>
            )
        })}
    </div>
  )
}
