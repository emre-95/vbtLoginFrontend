import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const mockToken = 'sample_token_123'
    login(mockToken)
    navigate('/')
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: "url('https://herkesicinhavacilik.com/wp-content/uploads/2023/04/Ucak-Kanatlari-Nasil-Tasarlanir-Baslik-1-scaled.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-4">
            <div className="bg-white bg-opacity-90 rounded-3 shadow p-5" style={{ marginRight: '5%', minWidth: '320px' }}>
              <h2 className="mb-4 text-primary fw-bold text-center">Giriş</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email adresi</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control rounded-2"
                    placeholder="Email giriniz"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">Şifre</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control rounded-2"
                    placeholder="Şifrenizi giriniz"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-semibold">
                  Giriş Yap
                </button>
              </form>
              <p className="mt-3 text-center text-muted">
                Hesabınız yok mu?{' '}
                <Link to="/register" className="text-primary fw-semibold" style={{ textDecoration: 'none' }}>
                  Kayıt Ol
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
