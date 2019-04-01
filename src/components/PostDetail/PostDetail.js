import React,{Component}from 'react';

import "./PostDetail.css";

// const PostDetail = (props) => {

//     return (
//         <div className="post-detail">
//             {/* <h1>{post.title}</h1>
//             <p>{post.content}</p> */}
//         <h1>Details {props.match.params.id}</h1>
//         </div>
//     );
// };
class PostDetail extends Component {
    state = {
        title: null,
        content: null
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                let detailPosts = data;
                this.setState({
                    title: detailPosts.title,
                    content: detailPosts.body
                })
            })
            .catch(err => console.log("Oops Error: " + err))
    }

    render() {
        return (
            <div className="post-detail">
                {/* <h1>{post.title}</h1>
                     <p>{post.content}</p> */}
                <h1>Details {this.props.match.params.id}</h1>
                <h1>Title: {this.state.title}</h1>
                <p>Content: {this.state.content}</p>
                
            </div>
        )
    }
}

export default PostDetail;