import './postSkill.css'
import React, { useState } from 'react'
import { app } from '../../../firebase-coneccion'
import { postSkill } from '../../../services/services-skill'

export const PostSkill = () => {
  const [fileUrl, setFileUrl] = useState('')
  const fileHandler = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const filePath = storageRef.child(file.name)
    await filePath.put(file)
    const linkUrl = await filePath.getDownloadURL()
    console.log(linkUrl)
    setFileUrl(linkUrl)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const nameFIle = e.target.nameInput.value
    const rank = e.target.rank.value
    const skill = { name: nameFIle, rank, img: fileUrl }
    postSkill(skill).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="nameInput" type="text" />
        <input placeholder="add rank" name="rank" type="text" />
        <input onChange={fileHandler} name="img" type="file" />
        <button>Send Reques</button>
      </form>
    </>
  )
}
