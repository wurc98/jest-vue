import { shallowMount } from '@vue/test-utils'
import Header from "../../../src/components/Header.vue"
import { findTestWrapper } from '../../../src/utils/testUitls'



describe("Header.vue", () => {
    it('组件渲染测试', () => {
        const wrapper = shallowMount(Header)
        const input = findTestWrapper(wrapper,"input1")
        expect(input.exists()).toBe(true)
    })

    it('input初始值为空', () => {
        const wrapper = shallowMount(Header)
        const value = wrapper.vm.$data.value
        expect(value).toBe('')
    })
    it('设置input中的value', () => {
        const wrapper = shallowMount(Header)
        const input = findTestWrapper(wrapper,"input1")
        input.setValue('测试')  //设置value 但必须保证input是双向绑定数据
        const value = wrapper.vm.$data.value
        expect(value).toBe('测试')
    })
    it('input中的value为空时，不触发回车事件', () => {
        const wrapper = shallowMount(Header)
        const input = findTestWrapper(wrapper,"input1")
        input.setValue('')  //设置value 但必须保证input是双向绑定数据
        input.trigger('keyup.enter')
        expect(wrapper.emitted().add).toBeFalsy()  //不应该触发函数
    })
    it('input中的value不为空时，触发回车事件', () => {
        const wrapper = shallowMount(Header)
        const input = findTestWrapper(wrapper,"input1")
        input.setValue('123')  //设置value 但必须保证input是双向绑定数据
        input.trigger('keyup.enter')
        expect(wrapper.emitted().add).toBeTruthy()  //不应该触发函数
    })
    it('触发回车事件之后，input中的value应为空，', () => {
        const wrapper = shallowMount(Header)
        const input = findTestWrapper(wrapper,"input1")
        input.setValue('123')  //设置value 但必须保证input是双向绑定数据
        input.trigger('keyup.enter')
        expect(wrapper.vm.$data.value).toBe('')  //不应该触发函数
    })


    it('利用快照，进行样式提示', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper).toMatchSnapshot();
    })
})