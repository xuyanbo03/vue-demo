<template>
  <div class="users">
      <h1>Users</h1>

      <form v-on:submit="addUser">
          <input type="text" placeholder="Enter name" v-model="newUser.name">
          <input type="text" placeholder="Enter email" v-model="newUser.email">
          <button type="submit">Submit</button>
      </form>

      <ul>
          <li v-for="user in users">
              <input type="checkbox" class="toggle" v-model="user.contacted">
              <span :class="{contacted:user.contacted}">
                {{user.name}} : {{user.email}}
                <button v-on:click="deleteUser(user)">X</button>
              </span>
          </li>
          
      </ul>
  </div>
</template>

<script>
    export default {
        name:"users",
        data(){
            return {
                newUser:{},
                users:[
                    {
                        name:"Awebone",
                        email:"Awebone@gmail.com",
                        contacted:false
                    },
                    {
                        name:"JJ",
                        email:"JJ@gmail.com",
                        contacted:false
                    },
                    {
                        name:"BB",
                        email:"BB@gmail.com",
                        contacted:false
                    }
                ]
            }
        },
        methods:{
            addUser:function(e){
                this.users.push({
                    name:this.newUser.name,
                    email:this.newUser.email,
                    contacted:false
                }),
                e.preventDefault();
            },
            deleteUser:function(user){
                this.users.splice(this.users.indexOf(user),1)
            }
        },
        created:function(){
            this.$http.get("http://jsonplaceholder.typicode.com/users").then(function(response){
                this.users=response.data;
            })
        }
    }
</script>

<style scoped>
.contacted{
    text-decoration: line-through;
}
</style>
