export const uploadImage = async (image: string | Blob) => {
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_imageBB_key
  }`;

  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data.data.url;
};
