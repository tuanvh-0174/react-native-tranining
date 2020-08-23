import React, { useState, useContext, useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import { BlogProvider } from '../context/BlogContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length+1}`} ]
        default:
            return state;
    }
};

const BlogScreen = () => {
    // const value = useContext(BlogContext);
    const data = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'}
    ];

//    const [blogPosts, setBlogPosts] = useState(data);
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

//    const addBlogPost = () => {
//        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length+1}`}]);
//    };

    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});
    }

    const editPost = () => {

    };

    const deletePost = () => {

    };

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={() => addBlogPost()} />
            <FlatList
                data={blogPosts}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) => {
                    return <Text>{ item.title }</Text>
                }}
                />

        </View>
    );
};

function Toolbar() {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}
const ThemeContext = React.createContext('light');
class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} title='button'/>;
  }
}

const styles = StyleSheet.create({

});

export default BlogScreen;
