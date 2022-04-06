import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({match}) => {
  const {getRepos, getUser, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name


  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
    }, [])

  if (loading) {
    return <p className='text-center'>Загрузка...</p>
  }

  const {
    avatar_url, name, company, following, 
    bio, blog, followers, login, 
    html_url, public_repos, public_gists,
    location
  } = user

  return (
    <>
      <Link to='/' className='btn btn-link'>На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
              src={avatar_url} 
              alt={name}
              style={{width: '150px'}}
               />
              <h1>{name}</h1>
              { location && <p>Местоположение: <br/><strong>{location}</strong></p> }
            </div>
            <div className="col">
              { bio && <>
                <h3>BIO</h3> 
                <p>{bio}</p>
              </> }
              <a 
              href={html_url}
              rel="noreferrer"
              target='_blank'
              className='btn btn-dark'
              >Открыть профиль</a>
              <ul>
              {
                  login && <li>
                    <strong>Username:</strong> {login}
                  </li>
                }
                {
                  company && <li>
                    <strong>Компания:</strong> {company}
                  </li>
                }
                {
                  blog && <li>
                    <strong>Блог:</strong> {blog}
                  </li>
                }
              </ul>
              <div className="badge badge-primary mr-1">Подписчики: {followers}</div>
              <div className="badge badge-success mr-1">Подписки: {following}</div>
              <div className="badge badge-info mr-1">Репозитории: {public_repos}</div>
              <div className="badge badge-dark mr-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}