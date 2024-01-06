import React from 'react'
import './style.css'
const AddPage = () => {
  return (
    <section className='AddPageSct'>
        <div class="AddPageContainer">
    <form>
      <input className="name" type="text" placeholder="Username" />
      <input className="job" type="text" placeholder="Role" />
      <button>Add</button>
    </form>
  </div>
  </section>
  )
}

export default AddPage