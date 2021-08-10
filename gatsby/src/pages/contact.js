// import React from 'react'
// import useForm from '../utils/useForm'



// const ContactPage = () => {
//   const { values, updateValue } = useForm({
//     name: '',
//     email: '',
//     // barf: '',
//   });
//   const sendMail = async e => {
//     e.preventDefault()
//     // const res = await fetch('/.netlify/functions/sendMail')
  
//     console.log({values})
//   }


//   return (
//     <>
//     <p>this will send me an email</p>
//     <form onSubmit={sendMail}>
//     <input type="text" name="name" onChange={updateValue} />
//     <input type="text" names="email" onChange={updateValue} />
//     <button type="submit">send</button>
//     </form>
//     </>
//   )
// }

// export default ContactPage