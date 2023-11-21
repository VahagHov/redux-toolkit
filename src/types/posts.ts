export interface IPost {
    userid: number ,
    id: number ,
    title: string ,
    body: string
}

export interface PostsInitialState {
    postsList: IPost[]
}