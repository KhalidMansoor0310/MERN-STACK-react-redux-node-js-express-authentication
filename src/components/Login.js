import React from 'react'

function Login() {
  return (
    <div className="container my-3">
    <div className="row">
        <div className="col-md-6 m-auto">
            <h1 className='text-center'>LOGIN</h1>
            <form action="" className='shadow p-5'>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button className="btn btn-primary btn-block">
                    Login
                </button>

            </form>
        </div>
    </div>
</div>
  )
}

export default Login
