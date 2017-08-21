import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'

export default [
    {
        path:"/demo/vueBlog",
        component: ShowBlogs
    },
    {
        path:"/demo/vueBlog/add",
        component: AddBlog
    },
    {
        path:"/demo/vueBlog/blog/:id",
        component: SingleBlog
    }
]