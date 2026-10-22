
const IMGBB_API_KEY = "9e0f4fba24e9a6f2be6fc4c88c939e05";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;
  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};