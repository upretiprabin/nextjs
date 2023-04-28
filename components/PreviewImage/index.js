import React from "react";

const PreviewImage = ({file}) => {
  const [preview, setPreview] = React.useState(null);
  if (typeof file === "string") {
    if (isValidUrl(file) && preview !== file) {
      setPreview(file);
    }
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div className={"imageSize"}>
      <img src={preview} alt="Image"/>
    </div>
  );
}

const isValidUrl = (str) => {
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

export default PreviewImage;