import { shallowMount } from '@vue/test-utils'
import TodoList from '../../../src/components/TodoList'
import Header from '../../../src/components/Header'


describe("TodoList.vue",()=>{
    it('组件渲染正常',()=>{
        const wrapper = shallowMount(TodoList)
        const ul = wrapper.find("[class='ul']")
        expect(ul.exists()).toBe(true)
    })

    it('TodoList执行add函数时，会增加一个内容',()=>{
        const wrapper = shallowMount(TodoList);
        wrapper.vm.add("测试add函数")
        const list = wrapper.vm.$data.list;
        expect(list).toContain("测试add函数")  //数组是否包含某属性
    })

    it('TodoList能够监听到Header的事件',()=>{
        const wrapper = shallowMount(TodoList)
        const header = wrapper.find(Header) // find找到的实例标签，也能使用vm
        header.vm.$emit('add','测试监听事件')  //
        const list = wrapper.vm.$data.list;
        expect(list).toContain("测试监听事件")
    })
})