<template>
        <Menu mode="horizontal" theme="dark" :active-name="sliderName" @on-select="onChange">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
        </Menu>
</template>

<script>
export default {
    props: {
        getNavIndex: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            sliderName: '1'
        }
    },
    mounted() {
        this.getNavIndex(this.sliderName);
        // this.$parent.getNavIndex(this.sliderName);
    },
    methods: {
        onChange(e) {
            // console.log('e: ', e);
            this.sliderName = e;
            this.getNavIndex(e);
            // this.$parent.getNavIndex(e);
        }
    },
}
</script>