
import Vuex from "../store/store";

let state = '';

export function hasPermissions(url,path,MenuList = Vuex.state.MenuList) {

    selectMenu(url,path,MenuList = Vuex.state.MenuList);
    return state;
}

function selectMenu(url,path,MenuList = Vuex.state.MenuList){

    for(let item of MenuList){

        if(item.url != url){

            if(item.child){

                if(JSON.stringify(item.child).indexOf(url) != -1){

                    selectMenu(url,path,item.child);

                }
            }

        }else{

            if(item.status){

                state = item.label;
            }else{

                state = false;
            }

        }
    }

}


export default {

}