import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        MenuList:[
            {
                label:'示例1',
                url:'dome1',
                status:true,
                child:[
                    {
                        label:'区块一',
                        url:'area1',
                        status:true,
                    },{
                        label:'区块二',
                        url:'area2',
                        status:true,
                    }
                ]
            },
            {
                label:'示例2',
                url:'dome2',
                status:true,
                child:[
                    {
                        label:'按钮一',
                        url:'btn1',
                        status:true,
                    },{
                        label:'按钮二',
                        url:'btn2',
                        status:true,
                    }
                ]
            },
            {
                label:'示例3',
                url:'dome3',
                status:true,
                child:[
                    {
                        label:'内容一',
                        url:'content1',
                        status:true,
                    },{
                        label:'内容二',
                        url:'content2',
                        status:true,
                    }
                ]
            }
        ],
    },

    // // 2. getters
    getters:{
        getMenuList(state) {
            return state.MenuList;
        }
    },
    // 3. actions
    actions:{

    },
    // 4. mutations
    mutations:{
        setMenuList(state,param) {
            state.MenuList = param;
            console.log(state)
        }
    }
});

export default store;