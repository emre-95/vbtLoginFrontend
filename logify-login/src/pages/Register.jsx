import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Şifreler uyuşmuyor!')
      return
    }
    const mockToken = 'new_user_token_456'
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
              <h2 className="mb-4 text-success fw-bold text-center">Kayıt</h2>
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
                <div className="mb-3">
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
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label fw-semibold">Şifre Tekrar</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control rounded-2"
                    placeholder="Şifrenizi tekrar giriniz"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100 fw-semibold">
                  Kayıt Ol
                </button>
              </form>
              <p className="mt-3 text-center text-muted">
                Zaten hesabınız var mı?{' '}
                <Link to="/login" className="text-success fw-semibold" style={{ textDecoration: 'none' }}>
                  Giriş Yap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
