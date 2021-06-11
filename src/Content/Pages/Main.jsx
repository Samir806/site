import React, {Component} from 'react'
import Post from './components/Post';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                  }
            ]
        }
    }
    
//    componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         //.then(data => this.setState({posts: data}))
//         .then(data => {
//             //console.log(data)
//             this.setState({
//                 posts: data.map(post => ({
//                     id: post.id,
//                     title: post.title
//                 }))
//             })

//         })

//         console.log(this.state.posts);
//    }

    send() {
        const {posts} = this.state;
        return posts.map(post => {
            <Post title={post.title}/>
        })
    }
    render() {
        
        return(
            <div>
            {
                this.send()
            }
                
            </div>
        )
    }
}

export default Main
