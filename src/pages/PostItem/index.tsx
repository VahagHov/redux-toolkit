import {  useParams } from 'react-router-dom'

export const PostItem = ({postLists}: any) => {
    const params = useParams ()
    const posts = postLists?.find((p: any) => p.id === +(params.id || 0))
  return  posts ? <div>{posts.title}</div> : <div>id: {params.id} is not valid </div>
}
