import React from 'react'
import { useForm } from 'react-hook-form'

const form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input 
            type="text" 
            placeholder='name' 
            {...register('name', {required:'name is required'})} 
        />
        <span>{errors.name.message}</span>
        <input 
            type="password" 
            placeholder='password'
            {...register("password", {required:"password is required"})}
        />
        <span>{errors.password.message}</span>
        <input type="submit" />
      </form>
    </div>
  )
}

export default form
