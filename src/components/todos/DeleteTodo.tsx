import { todoProps } from '@/types'
import React from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'
import { FaTrash } from 'react-icons/fa'
import * as actions from '@/actions'


const DeleteTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <Form action={actions.deleteTodo}>
            <Input name='inputId' value={todo.id} type='hidden' />
            <Button actionButton type='submit' bgColor='bg-red-500'
                text={<FaTrash />}></Button>

        </Form>
    )
}

export default DeleteTodo