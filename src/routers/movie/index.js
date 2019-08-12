export default {
    path : '/movie',
    component :() => import('@/views/Movie'),     /* 按需导入 @表示src目录 */
    children : [
        {
            path : 'city',       // /movie/city
            component : () => import('@/components/City')
        },
        {
            path : 'comingSoon',       // /movie/city
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'nowPlaying',       // /movie/city
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'search',       // /movie/city
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            redirect : 'nowPlaying'
        }
    ]
}