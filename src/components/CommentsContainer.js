import React from 'react'

// Sample nested comments data
const CommentsData = [
  {
    name: "Alice",
    text: "This is a great video!",
    replies: [
      {
        name: "Bob",
        text: "I agree with you, Alice!",
        replies: [
          {
            name: "Charlie",
            text: "Me too!",
            replies: [],
          },
        ],
      },
      {
        name: "Daisy",
        text: "Thanks for sharing!",
        replies: [],
      },
    ],
  },
  {
    name: "Eve",
    text: "Can someone explain the topic at 2:15?",
    replies: [
      {
        name: "Frank",
        text: "Sure, Eve! At 2:15, the presenter talks about...",
        replies: [],
      },
    ],
  },
  {
    name: "Grace",
    text: "Awesome content as always.",
    replies: [],
  },
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 m-1 rounded-lg '>
            <img
            className='w-12 h-12 object-scale-down '
            alt='user'
            src='https://imgs.search.brave.com/O21GeqnXiK7d9kNeeIn2uO3LwwYmypzQwmM4ni_6dXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/ODc5LzE4Ni9zbWFs/bC91c2VyLWljb24t/b24tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc'
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    // Disclaimer -: Dont use index as key

    return comments.map((comment,index)=>(
        <div key={index}>
        <Comment Key={index} data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
        
        </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments :</h1>
      <CommentsList comments = {CommentsData}/>
    </div>
  )
}

export default CommentsContainer
