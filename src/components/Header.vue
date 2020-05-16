<template>
    <div> 
        <input 
        placeholder='请输入...' 
        v-model="value" 
        @keyup.enter="addItem" 
        data-test="input1"/>
    </div>    
</template>
<script>
    export default {
        name:"Header",
        data(){
            return {
                value:""
            }
        },
        methods:{
            addItem(){
                if(this.value){
                    this.$emit("add",this.value)
                    this.value=''
                }
            }
        }
    }
</script>

<style>

</style>