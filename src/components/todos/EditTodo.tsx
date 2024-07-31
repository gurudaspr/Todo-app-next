"use client"

import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import Button from '../button/Button'
import Input from '../input/Input'
import Form from '../form/Form'
import { todoProps } from '@/types'
import * as actions from '@/actions'

const EditTodo = ({ todo }: { todo: todoProps }) => {
    const [editTodo, setEditTodo] = useState(false)
    const handleEdit = () => {
        if(todo.isCompleted){
            return ;
        }
        setEditTodo(!editTodo)
    };
    const handleSubmit = () => {
        setEditTodo(false)
    }
    return (
        <div className=' flex gap-5  items-center'>
            <Button onClick={handleEdit} text={<MdEdit />} actionButton />
            {editTodo ? (
                <Form action={actions.editTodo} onSubmit = {handleSubmit}>
                    <Input  name='inputId' value={todo.id} type='hidden'> 
                    </Input>
                    <div className=' flex justify-center'>
                    <Input name="newTitle" placeholder='Edit Todo' type="text" ></Input>
                    <Button type='submit' text="Save"></Button>
                    </div>

                </Form>) : null}
        </div>
    )
}

export default EditTodo