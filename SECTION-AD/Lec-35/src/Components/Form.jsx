import React, { useState } from 'react'

const Form = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const [submitData, setSubmitData] = useState(null);



    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData(formData);
        setFormData({
        name:"",
        email:"",
        message:""
    })

    };

    // console.log(formData);

  return (
    <div className='container'>
        <h1>React Form Component</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            value={formData.name}
            placeholder='Enter your name'
            onChange={handleChange}
            required
            />
            <input
            type='email'
            name='email'
            value={formData.email}
            placeholder='Enter your email'
            onChange={handleChange}
            required
            />
            <textarea
            name='message'
            value={formData.message}
            placeholder='Enter your message'
            onChange={handleChange}
            required
            />
            <button type="submit">Submit</button>
        </form>
        {submitData && (<div>
            <h2>{submitData.name}</h2>
            <h2>{submitData.email}</h2>
            <h2>{submitData.message}</h2>
        </div>)}
    </div>
  )
}

export default Form