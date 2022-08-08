
let users = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        left: 12
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
        left: 0
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        left: 1
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true,
        left: 41
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
        left: 22
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false,
        left: 21
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false,
        left: 4
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false,
        left: 3
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true,
        left: 2
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true,
        left: 8
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true,
        left: 6
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true,
        left: 4
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false,
        left: 2
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true,
        left: 0
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true,
        left: 0
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false,
        left: 0
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false,
        left: 1
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false,
        left: 23
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true,
        left: 26
    },
    {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true,
        left: 29
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false,
        left: 12
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false,
        left: 6
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true,
        left: 12
    },
    {
        "userId": 2,
        "id": 31,
        "title": "repudiandae totam in est sint facere fuga",
        "completed": false,
        left: 52
    },
    {
        "userId": 2,
        "id": 32,
        "title": "earum doloribus ea doloremque quis",
        "completed": false,
        left: 21
    },
    {
        "userId": 2,
        "id": 33,
        "title": "sint sit aut vero",
        "completed": false,
        left: 41
    },
    {
        "userId": 2,
        "id": 34,
        "title": "porro aut necessitatibus eaque distinctio",
        "completed": false,
        left: 31
    },
    {
        "userId": 2,
        "id": 35,
        "title": "repellendus veritatis molestias dicta incidunt",
        "completed": true,
        left: 1
    }
]
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')



const todayTodos = document.querySelector('.today-txt')
const topText = document.querySelector('.top-text')
const todos = document.querySelector('.todos')
const text = document.querySelectorAll('.text')
const homePage = document.querySelector('.homepage')
    for(let item of users){
        // <div class="todoBlock">
        //         <div class="top-todo-block">
        //         <input type="checkbox">
        //         <h1>Buy S Plaid!</h1>
        //         </div>
        //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae.</p>
        //         <p>Today</p>
        //     </div>
        let todoBlock = document.createElement('div')
        let topTodoBlock = document.createElement('div')
        let input = document.createElement('input')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let p2 = document.createElement('p')



        todoBlock.classList.add('todoBlock')
        topTodoBlock.classList.add('top-todo-block')
        input.type = 'checkbox'
        h1.innerHTML = 'Buy S Plaid!'
        p.innerHTML = item.title
        p2.classList.add('p2')
    
       
            input.checked = JSON.parse(localStorage.getItem('checked')) || ''
        
        // localStorage.clear()
        input.onchange = () => {
            localStorage.setItem('checked', JSON.stringify(input.checked))
        } 
            
        topTodoBlock.append(input, h1)
        todoBlock.append(topTodoBlock, p, p2)

        if(item.left <= 1){
            box1.append(todoBlock)
            p2.innerHTML = 'Today'
        } else if(item.left > 1 && item.left <= 2){
            box2.append(todoBlock)
            p2.innerHTML = 'Tomorrow'
        }  else if(item.left >= 3){
            box3.append(todoBlock)
            p2.innerHTML = 'After 10 days'
        }
        
        todayTodos.onclick = () => {
            todayTodos.style.color = 'orange'
            homePage.style.color = 'black'
            topText.style.display = 'none'
            todos.innerHTML = 'ONLY TODAY TODOS'
            text.forEach(i => {
                i.style.display = 'none'
            })
            box2.style.display = 'none'
            box3.style.display = 'none'
        }

        homePage.onclick = () => {
            todayTodos.style.color = 'black'
            homePage.style.color = 'orange'
            topText.style.display = 'block'
            todos.innerHTML = 'All todos'
            text.forEach(i => {
                i.style.display = 'block'
            })
            box2.style.display = 'flex'
            box3.style.display = 'flex'

        }
    }
                               
