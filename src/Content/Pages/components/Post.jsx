// import React, {Component} from 'react';

// class Post extends Component {

//     constructor(props) {
//         super(props)
//     }
    
//     render() {

//         return (
//             <div>
//                 <b>{this.props.title}</b>
//             </div>
//         );
//     }
// }
const Post = (props) => {

    return (
        <div>
            <b>{props.title}</b>
        </div>
    )
}

export default Post;