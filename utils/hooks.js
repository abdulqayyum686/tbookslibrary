import { useMutation } from "react-query";
import { deleteData, postData, updateData } from "./apifunctions";

const addBook = (bookdetails) => {
  return postData("/api/user/books/addbook", bookdetails);
};
const UserSignUp = (userData) => {
  return postData("/api/user/register", userData);
};
const changeBookStatus = (bookdetails) => {
  return updateData(
    "/api/user/books/specificbook",
    bookdetails
  );
};
const editbook = (bookdetails) => {
  return updateData(
    "/api/user/books/specificbook",
    bookdetails
  );
};
const deleteBookData = (bookdetails) => {
  return deleteData(`/api/user/books/${bookdetails._id}`);
};

export const useAddSuperheroData = () => {
  return useMutation(addBook, {
    onSuccess: (data) => {
      alert("book added");
    },
    onError: () => {
      alert("there was an error");
    },
  });
};
export const useUpdateSuperheroData = () => {
  return useMutation(changeBookStatus, {
    onSuccess: (data) => {
      alert("book updated");
    },
    onError: () => {
      alert("there was an error");
    },
  });
};

export const useDeleteSuperheroData = () => {
  return useMutation(deleteBookData, {
    onSuccess: (data) => {
      alert("book deleted");
    },
    onError: () => {
      alert("there was an error");
    },
  });
};
export const signupUser = () => {
  return useMutation(UserSignUp, {
    onSuccess: (data) => {
      alert("user deleted");
    },
    onError: () => {
      alert("there was an error");
    },
  });
};
export const EditBook = () => {
  return useMutation(editbook, {
    onSuccess: (data) => {
      alert("book updated");
    },
    onError: () => {
      alert("there was an error");
    },
  });
};
