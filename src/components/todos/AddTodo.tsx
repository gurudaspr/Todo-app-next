import React from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'
import * as actions from '@/actions'

const AddTodo = () => {
    return (
        <>
            <Form action={actions.createTodo} >
                <div className=' flex gap-4 items-center'>
                    <Input name='input' type='text' placeholder='Add Todo' />
                    <Button text='Add' type='submit' bgColor='bg-blue-600' />
                </div>
            </Form>
        </>
    )
}

export default AddTodo