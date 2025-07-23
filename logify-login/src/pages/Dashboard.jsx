import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Simüle edilmiş kullanıcı verisi
    const mockProfile = {
      name: 'Test Kullanıcı',
      email: '123@example.com',
      role: 'Yolcu',
      avatarUrl: 'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg',
    }
    setProfile(mockProfile)
    setFormData({ name: mockProfile.name, email: mockProfile.email })
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simüle güncelleme işlemi
    setProfile((prev) => ({
      ...prev,
      name: formData.name,
      email: formData.email,
    }))
    setMessage('Profil başarıyla güncellendi!')
    setTimeout(() => setMessage(''), 3000)
  }

  if (!profile) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center bg-dark text-white">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2022/06/03/11/26/airplane-7239966_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 px-4">
        <a className="navbar-brand fw-bold" href="/">FlyHigh</a>
        <div className="ms-auto">
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      </nav>

      {/* İçerik */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row g-4 bg-white bg-opacity-75 rounded-4 shadow-lg p-4">
              {/* Profil Kartı */}
              <div className="col-md-4 text-center">
                <img
                  src={profile.avatarUrl}
                  alt="Avatar"
                  className="rounded-circle mb-3 shadow"
                  style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold">{profile.name}</h5>
                <p className="text-muted mb-1">{profile.role}</p>
                <p className="text-break">{profile.email}</p>
              </div>

              {/* Form */}
              <div className="col-md-8">
                <h3 className="mb-4 text-primary">Profil Bilgilerini Güncelle</h3>

                {message && <div className="alert alert-success">{message}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ad Soyad</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary px-4">
                    Güncelle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
