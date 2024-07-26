// 이미지 고르는 로직 처리 및 마크업
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState();
  const imageInput = useRef();

  function handleButtonClick() {
    imageInput.current.click();
  }

  function handleImgChange(event) {
    const file = event.target.files[0]; // input에 의해 선택된 파일 중 한 개

    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImg && <p>No image picked yet</p>}
          {pickedImg && <Image src={pickedImg} alt="The image selected by user" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImgChange}
          required
        />
        <button className={styles.button} type="button" onClick={handleButtonClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
