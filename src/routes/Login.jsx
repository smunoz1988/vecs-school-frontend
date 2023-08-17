import { useState } from 'react'

const Lognin = () => {
  return (
    <>
    <div>LOGIN</div>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </form>
    </>
  )
};

export default Login
