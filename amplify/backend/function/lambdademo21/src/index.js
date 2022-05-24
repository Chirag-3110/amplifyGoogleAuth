

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const Todos=[
    {id:1,name:"Do homework"},
    {id:2,name:"perform lambda"},
    {id:3,name:"get shower"},
    {id:4,name:"complete react flow"},
    {id:5,name:"add dynamoDB"},
];
function getTodos(){
    return Todos;
}
function getTodosByID(id){
    return Todos.find(todo=>todo.id===id);
}

const resolvers={
    Query:{
        todos:()=>{
            return getTodos();
        },
        getTodos:(ctx)=>{
            return getTodosByID(ctx.argument.id);
        }
    }
}
exports.handler = async (event) => {
    const typeHandler=resolvers[event.typeName];
    if(typeHandler){
        const resolver=typeHandler[event.fieldName];
        if(resolver){
            var result=await resolver(event);
            console.log(result);
            return result;
        }
    }
    throw new Error("Resolver not found");
};
