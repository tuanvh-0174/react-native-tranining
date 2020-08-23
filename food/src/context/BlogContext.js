import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
console.log(children);
    return <BlogContext.Provider value={5}>
        { children }
    </BlogContext.Provider>
}

export default BlogContext;