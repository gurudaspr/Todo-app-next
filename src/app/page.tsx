import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma"

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy: {
      createdAt: "desc"
    }
  })
  return data
}


export default async function Home() {
  const data = await getData()

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-5xl font-bold">Todo App</span>
      <h1 className="text-3xl font-bold">
        <span className="lowercase">w/</span>Server Actions
      </h1>
      <div className="flex flex-col items-center justify-center">
        <AddTodo />

        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-screen" >
          {data.map((todo, id) => (
            <div  className="w-full" key={id} >
              <Todo key={id} todo={todo} />
          

            </div>

          ))}
        </div>

      </div>

    </div>

  );
}
