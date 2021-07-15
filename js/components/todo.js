Vue.component('todo',{
    data(){
        return{
            id:1,
            text:'',
            completed:false,
            title:'',
            todos:[]
        }
    },
    methods:{
        addTodo(){
            this.todos.push({id: this.id, text: this.text, completed: this.completed});
            this.text='';
            this.id +=1;            
        },
        completedTodos(){
            return this.todos.filter((todo) => todo.completed);
        },
        uncompletedTodos(){
            return this.todos.filter((todo) => !todo.completed);
        }
    },
    computed:{        
    },
    template:
    `
    <div>
        <form v-on:submit.prevent='addTodo'>
            <p>
                <label>Adicione uma tarefa</label>
                <input v-model='text' />
            </p>
            <p>
                <button type='submit'>Salvar</button>
            </p>
        </form>
        <todo-list v-bind:todos='completedTodos()' v-bind:title="title='Complete todos'"></todo-list>
        <todo-list v-bind:todos='uncompletedTodos()' v-bind:title="title='Uncomplete todos'"></todo-list>
    </div>
    `
})