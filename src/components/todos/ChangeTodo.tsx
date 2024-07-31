import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import * as actions from '@/actions'
import { todoProps } from '@/types'
import { FaCheck } from 'react-icons/fa'
import Form from '../form/Form'



const ChangeTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <Form action={actions.changeStatus} >
            <Input name='inputId' value={todo.id} type='hidden' placeholder='Add Todo' />
            <Button text={<FaCheck />}
                type='submit'
             actionButton 
             bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}></Button>
        </Form>

    )
}

export default ChangeTodo