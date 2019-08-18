<template>
<div class="layout">
    <Layout>
        <Header>
            <Nav :getNavIndex="getNavIndex" />
        </Header>
        <Layout>
            <Sider :navIndex="navIndex" />
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
        <Footer></Footer>
    </Layout>
</div>
</template>
<script>
    import Nav from './components/Nav.vue'
    import Sider from './components/Sider.vue'
    export default {
        components: { Nav, Sider },
        data() {
            return {
                navIndex: '1'
            }
        },
        mounted() {
            
        },
        methods: {
            getNavIndex(index) {
                this.navIndex = index;
            }
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>