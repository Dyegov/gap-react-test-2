import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='text'>Loading awesome Pokemon for you...</div>
      <img src='/Hourglass.gif' />
      <img className='pikachu' src='/pikachu.png' />
    </div>
  )
}

export default Loading
