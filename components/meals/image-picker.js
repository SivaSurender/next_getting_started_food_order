"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  const hanldeChangePickedImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const readFile = new FileReader();
    //   will be called on readDataURL
    readFile.onload = () => {
      setPickedImage(readFile.result);
    };

    //  calls above line
    readFile.readAsDataURL(file);
  };

  console.log(pickedImage);
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Selected image by the user" fill />
          ) : (
            "No image selected yet"
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={hanldeChangePickedImage}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
