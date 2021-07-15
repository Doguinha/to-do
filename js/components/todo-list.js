Vue.component('todo-list',{
    props:{
        todos:{
            type:Array,
            required:true
        },
        title:{
            type:String,
            required:true
        }
    },
    template:`
    <div>
        <b>{{title}}</b>
        <ul>
            <li v-for='(todo, index) in todos' v-bind:key='index'>
                <input type='checkbox' v-model='todo.completed'/>{{todo.text}}
            </li>
        </ul>
    </div>
    `
})