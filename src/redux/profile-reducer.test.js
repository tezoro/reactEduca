import profileReducer, { addPostActionCreator,deletePostActionCreator } from "./profile-reducer";

it('new post shold be added', ()=>{
   let action=addPostActionCreator("it kamasutra")
   let state={
    posts: [{
         id: 1,
         message: "hi, how are you ",
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      }
   ]}
let newState=profileReducer(state,action)
expect(newState.posts.length).toBe(5)
})
it('new post shold be added', ()=>{
   let action=addPostActionCreator("it kamasutra")
   let state={
    posts: [{
         id: 1,
         message: "hi, how are you ",
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      }
   ]}
let newState=profileReducer(state,action)
expect(newState.posts[4].message).toBe("it kamasutra")
})

it('if incorect post id do not increment', ()=>{
   let action= deletePostActionCreator(1)
   let state={
    posts: [{
         id: 1,
         message: "hi, how are you ",
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      },
      {
         id: 2,
         message: 'hi,itm my first post',
         likesCount: 10
      }
   ]}
let newState=profileReducer(state,action)
expect(newState.posts.length).toBe(4)
})

