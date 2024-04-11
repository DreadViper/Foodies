'use client'
import { useRef, useState } from "react"
import Image from "next/image"
import classes from "./image-picker.module.css"

export default function ImagePicker({ label, name }) {
    const [pickedImage , setPickedImage] = useState()
    const imageInput = useRef()
    
    function handleImageClick(){
        imageInput.current.click()
    }

    function handleImageChange(event){
        const file = event.target.files[0]

        if(!file){
            setPickedImage(null)
            return
        }
        const fileReader = new FileReader()
        fileReader.onload= () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return <>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        !pickedImage && <p>No Picked Image yet</p>
                    }
                    {
                        pickedImage && <Image src = {pickedImage} alt = "Picked Image" fill/>
                    }
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/jpg , image/jpeg , image/png"
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button type = "button"className={classes.button} onClick={handleImageClick}>Pick an Image</button>
            </div>
           
        </div>
    </>
}