const TopMenu = ()=> {
  return (
    <div className="main-head">
      <ul className="menu">
        <li className="menu-item"><a href="">Courses</a></li>
      </ul>
    <style jsx>{`
      .main-head {
        width: 100%;
        height: 80px;
        background-color: rgb(61, 79, 93);
        display: flex;
        align-items: center;
      }
      .menu {
        display: flex;
        list-style: none;
      }
      .menu .menu-item {
        width: 5vw;
      }
      .menu > .menu-item > a, .menu > .menu-item {
        color: #FFFFFF;
        text-decoration: none;
      }
      .menu > .menu-item {
        padding: 25px;
      }
      .menu {
        display: flex;
      }
    `}</style>
    </div>
  )
}

export default TopMenu