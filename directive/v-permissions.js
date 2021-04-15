import Vue from 'vue'
import {hasPermissions} from './dataStorage'


//在需要控制的地方使用v-permissions="'key'"

Vue.directive('permissions', {
    bind: function (el, binding, vnode) {
        if (!hasPermissions(binding.value.url,binding.value.path)){
            el.style.display = 'none';
        }else{
            if(!binding.value.hideText){
                el.textContent = hasPermissions(binding.value.url,binding.value.path);
            }
        }
    },
    update: function (el, binding, vnode) {
        console.log(123)
        if (hasPermissions(binding.value.url,binding.value.path)){
            el.style.display = 'block';
            if(!binding.value.hideText){
                el.textContent = hasPermissions(binding.value.url,binding.value.path);
            }
        }else{
            el.style.display = 'none';

        }
    },
});