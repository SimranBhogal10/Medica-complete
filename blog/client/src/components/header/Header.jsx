import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleLg'>Welcome, Bloggers!</span>
        </div>
        <img
        className='headerImg' 
        src="https://assets.imgix.net/unsplash/citystreet.jpg?fit=min&h=500&w=900&usm=10&fm=pjpg&q=80"
        alt="" />
    </div>
  )
}
