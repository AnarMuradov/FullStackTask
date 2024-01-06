import React from 'react'
import './style.css'
const EditPage = () => {
  return (
    <section className='EditPageSct'>
    <div class="EditPageContainer">
<form>
  <input className="name" type="text" placeholder="Username" />
  <input className="job" type="text" placeholder="Role" />
  <button>Edit</button>
</form>
</div>
</section>
  )
}

export default EditPage