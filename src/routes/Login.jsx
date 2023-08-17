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
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">Login</button>
      </form>
    </>
  )
};

export default Login
