import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostCard from "../PostCard/PostCard";
import PostDetail from "../PostDetail/PostDetail";
import "./PostList.css";

class PostList extends Component {
    state = {
        // posts: [
        //     {
        //         id: 1,
        //         title: "How to Train your Dog",
        //         content: "The key to a good dog is a well-trained dog. When you train together, an unspoken language builds between you through words, hand signals, whistles and other methods."
        //     },
        //     {
        //         id: 2,
        //         title: "Laura Ikeji Mocks Kanu",
        //         content: "Gossip!!! "
        //     },
        //     {
        //         id: 3,
        //         title: "New Video - Killing Dem by Zlatan",
        //         content: "watch on:    https://www.youtube.com/watch?v=EiU5MfolmUM"
        //     },

        // ],
        posts: [], 
        selectedPost: null,
        titleText: "",
        contentText: ""
    }

    postClicked = (post) => {
        // console.log("Clicked", post);
        // this.setState({
        //     selectedPost: post
        // })
        // this.setState({
        //     selectedPost:post
        // })
        // this.props.history.push("/about");

    }
    //added
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                let updatedPosts = data.splice(0, 8);
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => console.log("Oops Error: " + err))
    }

    
    componentWillUnmount = () => {
        //   console.log("Unmounted");
        } //added
    
    submitClicked = (e) => {
        // console.log("submit");
        const postLen = this.state.posts.length;
        const newId = this.state.posts[postLen - 1].id;

        const newPost = {
            id: newId + 1,
            title: this.state.titleText,
            content: this.state.contentText
        }
        this.setState({
            posts: [...this.state.posts, newPost]
        });

    }
    handleChange = (e) => {
        this.setState({ titleText: e.target.value });
    }


    contentChange = (e) => {
        this.setState({ contentText: e.target.value });
    }

    render() {
        let content = <p>Select a Post</p>;
        if (this.state.selectedPost !== null) {
            content = <PostDetail post={this.state.selectedPost} />
        }
        return (
            <div className="post-style">
                <div className="post-items">
                    {this.state.posts.map(post =>
                        <Link to={`${this.props.match.url}/${post.id}`} key={post.id}>
                            {/* <PostCard post={post} clicked={this.postClicked} /> */}
                            <PostCard post={post} /> 

                        </Link>
                    )}
                </div>
                <div className="post-content">
                    {content}
                </div>
                <div className="forms">
                    <input className="form-design" onChange={this.handleChange} type="text" placeholder="Input title"></input>
                    <input className="form-design" onChange={this.contentChange} type="text" placeholder="Input Content"></input>
                    <button className="button" onClick={this.submitClicked} >Submit</button>
                </div>
            </div>
        )
    }
}

export default PostList;

