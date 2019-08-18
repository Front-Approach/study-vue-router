<template>
    <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="getRouterLink">
            <MenuItem
                :name="item.linkPath"
                :key="index"
                v-for="(item, index) in sideList[navIndex-1].menu"
                
            >
                {{item.listName}}
            </MenuItem>
        </Menu>
    </Sider>
</template>

<script>
export default {
    props: {
        navIndex: String
    },
    data() {
        return {
            sideList: [
                {
                    count: 1,
                    menu: [
                        {
                            listName: 'Home1',
                            linkPath: '/home',
                            subList: []
                        },
                        {
                            listName: 'Slider1',
                            linkPath: '/slider',
                            subList: []
                        },
                        {
                            listName: 'haha1',
                            linkPath: '/haha',
                            subList: []
                        }
                    ]
                },
                {
                    count: 2,
                    menu: [
                        {
                            listName: 'Home2',
                            subList: []
                        },
                        {
                            listName: 'Slider2',
                            subList: []
                        },
                        {
                            listName: 'haha2',
                            subList: []
                        }
                    ]
                },
                {
                    count: 3,
                    menu: [
                        {
                            listName: 'Home3',
                            subList: []
                        },
                        {
                            listName: 'Slider3',
                            subList: []
                        },
                        {
                            listName: 'haha3',
                            subList: []
                        }
                    ]
                },
                {
                    count: 4,
                    menu: [
                        {
                            listName: 'Home4',
                            subList: []
                        },
                        {
                            listName: 'Slider4',
                            subList: []
                        },
                        {
                            listName: 'haha4',
                            subList: []
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        console.log('aaa', this.sideList[0].menu);
    },
    watch: {
        navIndex: {
            deep: true,  // 深度监听
            handler(newVal,oldVal) {
                console.log(newVal,oldVal)
            }
        }
    },
    methods: {
        getRouterLink(path) {
            // console.log('e: ', e);
            // console.log('path: ', path);
            let id = null;
            if (path.indexOf('home') !== -1) {
                id = 1008611
            }
            if (path.indexOf('slider') !== -1) {
                id = 1008622
            }
            if (path.indexOf('haha') !== -1) {
                id = 1008633
            }
            this.$router.push({path, query: {
                id
            }});
        } 
    },
}
</script>