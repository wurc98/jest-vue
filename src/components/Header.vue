<template>
    <div> 
        <input v-model="value" @keyup.enter="addItem" data-test="input"/>
    </div>    
</template>
<script>
    export default {
        name:"input",
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