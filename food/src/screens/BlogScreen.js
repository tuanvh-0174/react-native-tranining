import React, { useState, useContext, useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { BlogProvider } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    title: `Blog Post #${state.length+1}`
                }
            ]
        case 'delete_blogpost':
            return state.filter((blogPosts) => blogPosts.id !== action.payload)
        default:
            return state;
    }
};

const BlogScreen = () => {
    // const value = useContext(BlogContext);
//    const data = [
//        {title: 'Blog Post #1'},
//        {title: 'Blog Post #2'}
//    ];

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
        dispatch({ type: 'delete_blogpost', payload: id });
    };

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={() => addBlogPost()} />
            <FlatList
                data={blogPosts}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{ item.title } - {item.id}</Text>
                        <TouchableOpacity onPress={() => deletePost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default BlogScreen;
