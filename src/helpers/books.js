import Axios from "axios";

const apiGoogleBook = "https://www.googleapis.com/books/v1/volumes?q=";

export const searchBook = async (forSearchBook) => {
  // Recibe un string y separa todos los espacios
  try {
    let book ={
      id_: "",
      title: "",
      authors: [],
      description: "",
      thumbnail:
        "https://www.practicalrecovery.com/wp-content/uploads/2016/12/character-defects-in-recovery-300x300.png",
    };
    const { data } = await Axios.get(
      `${apiGoogleBook}${forSearchBook.replace(" ", "+")}&maxResults=5`
    );
    const aux = data.items.map((data) => {
    book = {
        id_: data.id,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors,
        description: data.volumeInfo.description,
      };
      if (data.volumeInfo.imageLinks.thumbnail) {
        book.thumbnail = data.volumeInfo.imageLinks.thumbnail;
      }
      return book;
    });

    return aux;
  } catch (error) {
    // Crear función de manejo de errores
    console.log(error);
  }
};